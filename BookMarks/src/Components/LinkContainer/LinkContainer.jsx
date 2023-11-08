// import React from 'react'
// import AddLink from "../AddLink/AddLink"

function LinkContainer() {
  return (
  <>
    <div className=" flex justify-center mb-[1rem] bg-black px-8 py-8 ">
  
        <div className=" lg overflow-y-hidden flex flex-wrap gap-[1rem] md:justify-start justify-center">
          <div
            className="p-[5px] pb-[1rem]"

          >
            <div id="Link-Container" className="border rounded-[30px] shadow-white shadow-md border-white md:w-[30vw] w-[90vw] pb-[1rem]">
              <div className="flex md:w-[30vw] w-[90vw] p-[5px] pb-[8px] item-center justify-between">
                <div className="text-white shadow-white shadow-md hover:text-black hover:bg-white transition-all duration-300 cursor-pointer flex items-center justify-center px-[1rem] h-[30px] rounded-[20px] ml-[1rem] mt-[1rem] border border-white">Chat gpt </div>

                <div className="flex items-center">
               <button className="text-white w-[40px] cursor-pointer hover:scale-110 transition-all duration-300 scale-125 mr-[20px] shadow-white shadow-md border border-white rounded-xl">Save</button>
                </div>
              </div>
              <div className="flex md:w-[30vw] w-[90vw] item-center justify-center mt-[15px]">
              <p className="text-white">Here we will rander one picture</p>
               
              </div>
              <div className="flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]">
                <p className="md:text-[20px] text-[18px] font-[500] tracking-wide border-b pb-[10px] md:w-[26vw] w-[80vw] border-white">Importance</p>
              </div>
              <div className="flex md:w-[30vw] w-[90vw] text-white item-center pl-[1.5rem] mt-[16px]">
                <p className="tracking-wide pb-[10px] md:w-[26vw] w-[80vw]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid fuga odit modi. Et reiciendis dolores nam debitis, sapiente harum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   

  </>
  )
}

export default LinkContainer

  