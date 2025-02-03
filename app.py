from flask import Flask, request, send_file
from flask_cors import CORS
import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
from PIL import Image
import io
import os

# Disable oneDNN optimizations (optional)
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

# Load the pre-trained model from TensorFlow Hub
model = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')

def load_image(image_bytes, size=(256, 256)):
    """Loads an image and preprocesses it for the NST model."""
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    image = image.resize(size)
    image = np.array(image) / 255.0  # Normalize
    return tf.convert_to_tensor(image, dtype=tf.float32)[tf.newaxis, ...]

app = Flask(__name__)
CORS(app)

@app.route('/style-transfer', methods=['POST'])
def style_transfer():
    try:
        # Ensure files are uploaded
        if 'content_image' not in request.files or 'style_image' not in request.files:
            return jsonify({"error": "Content or style image not provided"}), 400

        content_file = request.files['content_image']
        style_file = request.files['style_image']

        # Ensure files are selected
        if content_file.filename == '' or style_file.filename == '':
            return jsonify({"error": "No file selected"}), 400

        print(f"Received content image: {content_file.filename}")
        print(f"Received style image: {style_file.filename}")

        # Read image bytes
        content_image = content_file.read()
        style_image = style_file.read()

        # Convert images to tensors
        content_tensor = load_image(content_image)
        style_tensor = load_image(style_image)

        # Run style transfer model
        stylized_image = model(tf.constant(content_tensor), tf.constant(style_tensor))[0]

        # Convert tensor to PIL image
        stylized_image = np.array(stylized_image[0] * 255, dtype=np.uint8)
        output_image = Image.fromarray(stylized_image)

        # Save the stylized image to a file
        output_image.save("stylized_output.jpg")

        # Return the image as a response
        return send_file("stylized_output.jpg", mimetype='image/jpeg')

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal server error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

