import React from 'react'

export const About = () => {

  let divstyle = {
    width: "50%",
    margin: "10px"
  }

  return (
    <div>
      
      <h4 className='my-3 d-block font-bold '> What makes us Amazing! </h4>
      <p className='float-right'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sapiente quam eligendi culpa. Id, eligendi iste? Modi voluptas nisi minima, soluta similique excepturi labore dicta laudantium quos cumque maxime sequi necessitatibus, natus non magni, ut reiciendis placeat fuga esse molestiae alias libero unde. Officia obcaecati quod consequatur doloribus neque sint numquam veniam quia eaque debitis tempora, perferendis voluptates. Provident eius iure possimus rerum consectetur. Voluptatum eius qui ipsa at quidem minus illum expedita hic unde cupiditate. Ipsam dolor similique harum eligendi sint delectus, qui architecto cupiditate eos beatae iusto aperiam corporis! Repudiandae esse nisi aliquam corrupti rerum cum impedit obcaecati!
      </p>
      

      <div class="col-auto mx-5 my-5 ">
      <button type="submit" class="btn btn-success mb-3 mx-4">Get started with us </button>
     
     </div>

     <h2 className='underline font-bold '>Here are some of our previous arts </h2>

      <div >

        <div className='flex justify-center items-center space-x-8 my-8 '>
          <div className='h-72 w-72 rounded-xl bg-slate-100 '>

          </div>
          <div className='h-72 w-72 bg-slate-100 rounded-xl'>
            {/* <img className='w-full h-full' src="" alt="img not found" srcset="" /> */}
          </div>
          <div className='h-72 w-72 bg-slate-100 rounded-xl grid grid-cols-3 p-3'>

          </div>
        </div>

      </div>
      <div >

        <div className='flex justify-center items-center space-x-8 my-8 '>
          <div className='h-72 w-72 rounded-xl bg-slate-200 '>

          </div>
          <div className='h-72 w-72 bg-slate-200 rounded-xl'>
            {/* <img className='w-full h-full' src="" alt="img not found" srcset="" /> */}
          </div>
          <div className='h-72 w-72 bg-slate-200 rounded-xl grid grid-cols-3 p-3'>

          </div>
        </div>

      </div>
      <div >

        <div className='flex justify-center items-center space-x-8 my-8 '>
          <div className='h-72 w-72 rounded-xl bg-slate-200 '>

          </div>
          <div className='h-72 w-72 bg-slate-200 rounded-xl'>
            {/* <img className='w-full h-full' src="" alt="img not found" srcset="" /> */}
          </div>
          <div className='h-72 w-72 bg-slate-200 rounded-xl grid grid-cols-3 p-3'>

          </div>
        </div>

      </div>



      </div>
     



  )
}
