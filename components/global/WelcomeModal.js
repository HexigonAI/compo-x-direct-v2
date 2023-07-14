import React from 'react'

export const WelcomeModal = ({
    setShowWelcome,
    fetchPromptData
  }) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full justify-center p-4 text-center items-center">
  
      <div className=" bg-[#31353C] relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-[26rem]">
            {/* <img src='../../images/tayler-profile-p-500.png' className=" z-20 h-72 object-cover w-full"/> */}

        <div className=" px-4 pb-4 pt-2 ">
          <div className="sm:flex sm:items-start">
            <div className=" ">
              <h3 className="text-base font-semibold  text-white" id="modal-title">Welcome to CompoX</h3>
              <div className=" w-96">
                <p className="text-xs font-mono text-white">
                As the next generation of ai-based visual editors for the web, we are proud to release our beta 1.2 version to yourself and your team. Take a moment to watch how different our web creation experience is compared to anything else out there.  
                <br/> <br/>Our engine will return responses depending on your input. Describe the component you want, and what kind of site you'll be using it for. Add a prompt using proper HTML cues like this...
                </p> 
              </div>
              <div className="text-xs text-white flex  justify-center flex-col items-center">
                <div className=' w-96 p-2  rounded-xl bg-[#F7F7F7] text-black'> Create a hero section for an e-commerce site with an intro on the left and a graphic on the right </div>
              </div>
            </div>
          </div>
        </div>
        {/* TODO add in a more detailed prompt to get a better response */}
        <div className="bg-[#6366F1] px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={(e) =>{ fetchPromptData(e, 'Create a Hero section'); setShowWelcome(false)}} type="button" className=" bg-transparent w-full text-white">Generate</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default WelcomeModal