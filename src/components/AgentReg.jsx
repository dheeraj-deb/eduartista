import React,{ useState} from 'react'
import { MdArrowBackIosNew } from "react-icons/md";


const AgentReg = () => {
  const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  return (
    <>
      
       {/* Dots Animation */}
       <div className="flex justify-center mb-5 mt-2">
                    {[...Array(3)].map((_, index) => (
                        <div 
                            key={index} 
                            className={`w-2 h-2 mx-1.5 bg-[#111111] rounded-full transition-all duration-300 ${index < step ? 'scale-125 opacity-100' : 'opacity-50'}`}
                        ></div>
                    ))}
                    
                </div>

                <div className="mt-4 flex justify-between">
                        {step > 1 && <button onClick={prevStep} type="button" className="btn-primary"><MdArrowBackIosNew /></button>}
                        {step < 3 && <button onClick={nextStep} type="button" className="px-4 bg-[#11111136] text-black  rounded-sm ml-auto border border-transparent hover:border-black">Next</button>}
                        {step === 3 && <button type="submit" className="px-4 bg-[#11111136] text-black  rounded-sm ml-auto border border-transparent hover:border-black">Submit</button>}
                    </div>

    </>
  )
}

export default AgentReg