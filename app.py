from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/style-transfer', methods=['POST'])
def style_transfer():
    try:
        # Check if the content_image and style_image keys are in the request
        if 'content_image' not in request.files or 'style_image' not in request.files:
            print("Error: No content_image or style_image found in request")
            raise ValueError('Content image or style image not provided')

        content_image = request.files['content_image']
        style_image = request.files['style_image']

        if content_image.filename == '' or style_image.filename == '':
            print("Error: No file selected for one or both images")
            raise ValueError('No file selected')

        print(f"Content image filename: {content_image.filename}")
        print(f"Style image filename: {style_image.filename}")

        # Here We can add your logic for style transfer (e.g., processing the images)
        # For now, just returning a success message
        return jsonify({"message": "Style transfer complete!", "output": "http://some_url_to_output_image.jpg"})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal server error", "message": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
