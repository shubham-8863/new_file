
import React from 'react';


// Reusable Card Component
const ImageUploadCard = ({ title, label, onChange }) => {
  return (
    <div className="card mx-20 w-96 bg-secondary-subtle h-[400px]">
      <div className="card-body flex flex-col justify-center items-center">
        <h3 className="card-title my-3 font-extrabold">{title}</h3>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label font-bold">{label}</label>
          <input className="form-control" onChange={onChange} type="file" accept="image/*" id="formFile" />
        </div>
      </div>
    </div>
  );
};

export const Home = ({ uploadcontent, uploadstyle, submit ,loading , output }) => {
  

  
  return (
    <div className="my-7">
      <div className="flex py-4">
        {/* Content Image Card */}
        <ImageUploadCard
          title="Content Image"
          label="Upload your Content Image Here"
          onChange={uploadcontent}
        />

        {/* Style Image Card */}
        <ImageUploadCard
          title="Style Image"
          label="Upload your Style Image Here"
          onChange={uploadstyle}
        />
      </div>

        
      <div className="col-auto mx-5 my-5 text-center">
        <button
          type="submit"
          className="btn bg-slate-500 text-white px-4 py-2 rounded mx-auto w-80 h-16 overflow-hidden hover:bg-slate-700"
          onClick={submit}
        > {loading ? 'Processing...' : 'Click to Transfer your Image'}
        </button>
        
        <h2 className='my-5'> {output}</h2>

        
        
      </div>
    </div>
  );
};
