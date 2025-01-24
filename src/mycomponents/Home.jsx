import React from 'react'

export const Home = () => {
  return (
    <div>









<div className ="row my-5">
  <div className ="  col-sm-6 mb-3 mb-sm-0">
    <div className ="card py-4 mx-5 bg-secondary-subtle">
      <div className ="card-body ">
        
        <h3 className ="card-title my-3 font-extrabold">Content  Image </h3>
        <div className ="mb-3">
       <label for="formFile" className ="form-label font-bold"> Upload your Content Image Here </label>
       <input className ="form-control" type="file" id="formFile"/>
       </div>
       <div class="col-auto">
      <button type="submit" class="btn bg-slate-500 font-semibold mb-3 hover:bg-slate-700">Upload </button>
     </div>
        
      </div>
    </div>
  </div>
  <div className =" col-sm-6 ">
    <div className ="card py-4 mx-5 bg-secondary-subtle">
      <div className ="card-body  ">
        <h3 className ="card-title my-3 font-extrabold">Style Image </h3>
        <div className ="mb-3">
       <label for="formFile" className ="form-label font-bold">Upload your Style image here</label>
       <input className ="form-control" type="file" id="formFile"/>
       </div>
       <div class="col-auto">
      <button type="submit" class="btn font-semibold bg-slate-500  mb-3 hover:bg-slate-700">Upload </button>
     </div>
      </div>
    </div>
  </div>

  <div class="col-auto mx-5 my-5">
      <button type="submit" class="btn bg-slate-500  mb-3 mx-4 hover:bg-slate-700">View transfered img </button>
      <button type="submit" class="btn bg-slate-500  mb-3 mx-4 hover:bg-slate-700 ">Download transfered img </button>
     </div>

</div>












    </div>
  )
}
