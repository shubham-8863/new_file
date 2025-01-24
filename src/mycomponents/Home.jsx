import React from 'react'

export const Home = () => {
  return (
    <div>









<div className ="row my-5">
  <div className ="  col-sm-6 mb-3 mb-sm-0">
    <div className ="card py-4 mx-5 bg-secondary-subtle">
      <div className ="card-body ">
        
        <h3 className ="card-title my-3">First  Image </h3>
        <div className ="mb-3">
       <label for="formFile" className ="form-label"> Upload your first Image below</label>
       <input className ="form-control" type="file" id="formFile"/>
       </div>
       <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Upload </button>
     </div>
        
      </div>
    </div>
  </div>
  <div className =" col-sm-6 ">
    <div className ="card py-4 mx-5 bg-secondary-subtle">
      <div className ="card-body  ">
        <h3 className ="card-title my-3">Second Image </h3>
        <div className ="mb-3">
       <label for="formFile" className ="form-label">Upload your second Image below</label>
       <input className ="form-control" type="file" id="formFile"/>
       </div>
       <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Upload </button>
     </div>
      </div>
    </div>
  </div>

  <div class="col-auto mx-5 my-5">
      <button type="submit" class="btn btn-success mb-3 mx-4">View transfered img </button>
      <button type="submit" class="btn btn-success mb-3 mx-4 ">Download transfered img </button>
     </div>

</div>












    </div>
  )
}
