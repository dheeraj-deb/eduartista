import React, { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { useForm } from "react-hook-form";



const stepFields = {
  1: ['name', 'mobileNumber', 'dob'],
  2: ['address', 'postOffice', 'pincode', 'district', 'state', 'country'],
  3: ['punchayathMunicipality', 'wardNumber', 'photo']
};


const AgentReg = () => {
  const { register, handleSubmit, setValue, setError, formState: { errors }, trigger } = useForm({
    mode: "onChange",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: '',
      mobileNumber: '',
      dob: '',
      address: '',
      postOffice: '',
      pincode: '',
      district: '',
      state: '',
      country: '',
      punchayathMunicipality: '',
      wardNumber: '',
      cdsName: '',
      photo: null,
    },
  });

  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState(null); // To store captured photo
  const [isWebcamVisible, setIsWebcamVisible] = useState(false); // Initially, the webcam is not visible

  const webcamRef = useRef(null);

  // Capture photo from the webcam
  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    setIsWebcamVisible(false); // Hide the webcam after capturing the photo
    setValue('photo', imageSrc, { shouldValidate: true });
  }, [webcamRef, setValue]);


  // Show the webcam for capturing or retaking a photo
  const showWebcam =useCallback(() => {
    setIsWebcamVisible(true); // Show the webcam
    setPhoto(null); // Clear previous photo
  }, []);


  // Function to get fields for validation based on the current step
  const getFieldsToValidate = (currentStep) => stepFields[currentStep] || [];
  
   // Move to the next step after validating the current step
   const nextStep = useCallback( async () => {
    const fieldsToValidate = getFieldsToValidate(step);
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  }, [step, trigger]);


  // Handle form submission
  const onSubmit = (data) => {
    if (step === 3 && !photo) {
      setError('photo', { type: 'manual', message: 'Photo is required' });
      return;
    }
    data.photo = photo;// Store the captured image
    console.log(data);
    // Process form data (e.g., send to a server)
  };

  return (
    <>
      {/**Dots Animation */}
      <div className='flex justify-center mt-10 mx-10 my-8'>
        {[...Array(3)].map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300 ease-in ${index < step ? 'bg-[#111111] scale-125' : 'bg-[#11111136] scale-100'}`}
              >
                <span className="text-xs text-white font-light">
                  {index + 1}
                </span>
              </div>
            </div>
            {index < 2 && (
              <div
                className={`w-[200px] h-[1px] mx-3 transition-colors duration-300 ${step > index + 1 ? 'bg-black' : 'bg-gray-400'}`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
           <div className='mb-4'>
              <label htmlFor="name" className="input-label-ag">{`What's your name?`}</label>
              <input
                  type="text"
                  id="name" 
                  {...register('name', { 
                    required: 'Name is required',
                    minLength:{
                      value: 3, 
                      message: 'Name must be at least 3 characters long',},
                    maxLength: {
                      value: 25,
                      message: 'Name cannot exceed 25 characters',
                    },
                    pattern: {
                      value: /^[a-zA-Z][a-zA-Z\s'-]*$/,
                      message: "Name should only contain letters (a-z, A-Z), spaces, ('), and (-)."
                    },
                   })}
                  placeholder="Write your full name"
                  className="input-box-ag"  
               />
             {errors.name &&<p className="error-ag">{errors.name.message}</p>}
           </div>
           <div className="mb-4">
              <label htmlFor="mobileNumber" className="input-label-ag">Please enter your mobile number</label>
              <input 
                  id="mobileNumber" 
                  type="text"
                  {...register('mobileNumber', { 
                    required: 'Mobile Number is required',
                    minLength:{
                      value:10,
                      message:"Mobile number must be exactly 10 digits."
                    },
                    maxLength: {
                      value:10,
                      message:"Mobile number  must be exactly 10 digits.",
                    },
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Please enter a valid mobile number'
                    }
                  })} 
                  placeholder='Enter your 10 digit mobile number'
                  className="input-box-ag"
              />
              {errors.mobileNumber && <p className='error-ag'>{errors.mobileNumber.message}</p>}
            </div>

            <div className="mb-7">
              <label htmlFor='dob' className="input-label-ag">Enter your date of birth</label>
              <input 
                  type="date" 
                  id='dob'
                  {...register('dob', { 
                    required: 'Date of Birth is required' 
                  })}
                  className="input-box-ag" 
              />
              {errors.dob && <p className='error-ag'>{errors.dob.message}</p>}
            </div>
          </>
        )}

        {step === 2 && (
          <>
          <div className="h-64 overflow-y-scroll custom-scrollbar px-2">
            <div className='mb-4'>
              <label htmlFor='address' className="input-label-ag">Address</label>
              <input
                  type='text' 
                  id='address' 
                  {...register('address', { 
                    required: 'Address is required',
                    minLength: {
                      value: 10,
                      message: 'Address must be at least 10 characters long.'
                    },
                    maxLength: {
                      value: 100,
                      message: 'Address cannot be longer than 100 characters.'
                    }, 
                    pattern: {
                      value:/^[a-zA-Z0-9][a-zA-Z0-9\s,'-./]*$/,
                      message: 'Address should only contain (a-z, A-Z), spaces, numbers, commas, periods, apostrophes, hyphens, and slashes.'
                    }
                   })} 
                  placeholder="Enter your address"
                  className="input-box-ag" />
              {errors.address && <p className='error-ag'>{errors.address.message}</p>}
            </div>
            <div className='mb-4'>
              <label htmlFor='postOffice' className="input-label-ag">Post Office</label>
              <input 
                  type='text' 
                  id='postOffice' 
                  {...register('postOffice', { 
                    required: 'Post Office is required' ,
                    minLength: {
                      value: 3,
                      message: 'Post Office must be at least 3 characters long.'
                    },
                    maxLength: {
                      value: 50, 
                      message: 'Post Office cannot be longer than 50 characters.'
                    },
                    pattern: {
                      value: /^[a-zA-Z][a-zA-Z\s]*$/, 
                      message: 'Post Office should start with a letter and only contain letters and spaces.'
                    }
                    })}
                  placeholder="Enter your post office name" 
                  className="input-box-ag" />
              {errors.postOffice && <p className='error-ag'>{errors.postOffice.message}</p>}
            </div>
            <div className='mb-4' >
              <label htmlFor='pincode' className="input-label-ag">Pincode</label>
              <input 
                  type='text' 
                  id='pincode' 
                  {...register('pincode', { 
                    required: 'Pincode is required',
                    pattern: {
                      value: /^\d{6}$/, // Exactly 6 digits
                      message: 'Pincode must be exactly 6 digits.'
                    } 
                    })} 
                  placeholder='Enter your pincode'
                  className="input-box-ag"  />
              {errors.pincode && <p className='error-ag'>{errors.pincode.message}</p>}
            </div>
            <div className='mb-4'>
              <label htmlFor='district' className="input-label-ag">District</label>
              <input 
                  type='text' 
                  id='district' 
                  {...register('district', { 
                    required: 'District is required',
                    minLength: {
                      value: 3,
                      message: 'District must be at least 3 characters long.'
                    },
                    maxLength: {
                      value: 15, 
                      message: 'District cannot be longer than 15 characters.'
                    },
                    pattern: {
                      value: /^[a-zA-Z][a-zA-Z\s]*$/, 
                      message: 'District  should start with a letter and only contain letters and spaces.'
                    }
                     })} 
                    placeholder='"Enter your district"'
                    className="input-box-ag" />
              {errors.district && <p className='error-ag'>{errors.district.message}</p>}
            </div>
            <div className='mb-4'>
              <label htmlFor='state' className="input-label-ag">State</label>
              <input 
                 type='text' 
                 id='state'
                 {...register('state', { 
                  required: 'State is required',
                  minLength: {
                    value: 3,
                    message: 'State must be at least 3 characters long.'
                  },
                  maxLength: {
                    value: 15, 
                    message: 'State cannot be longer than 15 characters.'
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z\s]*$/, 
                    message: 'State  should start with a letter and only contain letters and spaces.'
                  } 
                  })} 
                placeholder="Enter your state" 
                className="input-box-ag" 
              />
              {errors.state && <p className='error-ag'>{errors.state.message}</p>}
            </div>
            <div className="mb-7">
              <label htmlFor='country' className="input-label-ag">Country</label>
              <input 
                  type='text' 
                  id='country'
                  {...register('country', { 
                    required: 'Country is required',
                    minLength: {
                      value: 3,
                      message: 'Country must be at least 3 characters long.'
                    },
                    maxLength: {
                      value: 15, 
                      message: 'Country cannot be longer than 15 characters.'
                    },
                    pattern: {
                      value: /^[a-zA-Z][a-zA-Z\s]*$/, 
                      message: 'Country  should start with a letter and only contain letters and spaces.'
                    }
                     })} 
                  placeholder="Enter your country" 
                  className="input-box-ag" 
               />
              {errors.country && <p className='error-ag'>{errors.country.message}</p>}
            </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className='mb-4'>
              <label htmlFor="punchayathMunicipality" className="input-label-ag">Punchayath/Municipality</label>
              <input 
                 type='text' 
                 id='punchayathMunicipality'
                 {...register('punchayathMunicipality', {
                   required: 'This field is required',
                   minLength:{
                    value: 5, 
                    message: 'Must be at least 5 characters long',},
                  maxLength: {
                    value: 25,
                    message: 'Cannot exceed 25 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
                    message: "Name should only contain letters (a-z, A-Z), spaces, ('), and (-)."
                  },
                  })} 
              placeholder='Name of your punchayath or Municipality'
              className="input-box-ag" 
              />
              {errors.punchayathMunicipality && <p className='error-ag'>{errors.punchayathMunicipality.message}</p>}
            </div>
            <div className='mb-4'>
              <label htmlFor="wardNumber" className="input-label-ag">Ward Number</label>
              <input 
                  type='number' 
                  id='wardNumber' 
                  {...register('wardNumber', { 
                    required: 'Ward Number is required', 
                    minLength:{
                      value: 1, 
                      message: 'Must be at least 1 digit long',},
                    maxLength: {
                      value:2,
                      message:'Cannot exceed 2 digits '
                    }
                  })} 
                  placeholder='Enter your ward Number'
                  className="input-box-ag" />
              {errors.wardNumber && <p className='error-ag'>{errors.wardNumber.message}</p>}
            </div>
            <div className='mb-4'>
            <label htmlFor='cdsName' className="input-label-ag">CDS Name</label>
              <input
                type='text'
                id='cdsName'
                {...register('cdsName', { 
                  minLength:{
                    value: 3, 
                    message: 'Name must be at least 3 characters long',},
                  maxLength: {
                    value: 50,
                    message: 'Name cannot exceed 20 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z\s'-]*$/,
                    message: "Name should only contain letters (a-z, A-Z), spaces, ('), and (-)."
                  },
                 })}
                 placeholder='If you are a kudumbashree member'
                 className="input-box-ag"
              />
              {errors.cdsName && <p className='error-ag'>{errors.cdsName.message}</p>}
            </div>


            {/* Webcam Component for Capturing Photo div 1 className="flex flex-col items-center my-6" div 2  className="flex items-center space-x-4 mb-4"*/}
            <div className='flex flex-col mb-7'>
              <div>
                <label htmlFor='photo' className="input-label-ag ">Take Your Photo</label>
                {errors.photo && <p className='error-ag'>{errors.photo.message}</p>}
               <div className='flex justify-center'>
               {isWebcamVisible ? (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="w-full max-w-[320px] h-auto max-h-[240px] shadow-xl mb-4 border-[#11111136] border-2 rounded-lg"
                  videoConstraints={{ facingMode: "user" }}
                />
              ) : (
                photo && (                
                    <img src={photo} alt="Captured" className="w-full max-w-[320px] h-auto max-h-[240px] shadow-xl mb-4 border-[#11111136] border-2 rounded-lg" />
                )
              )}
               </div>
                
                <div className='flex justify-center'>
                <button
                  type="button"
                  onClick={isWebcamVisible ? capturePhoto : showWebcam}  // Change button action
                  className={`px-4 ${isWebcamVisible ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-500 hover:bg-gray-700'} text-white rounded-full transition-colors`}
                >
                   {photo ? 'Retake' : 'Capture'}  {/* Change button text */}
                 </button>
                </div>
              </div>             
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className='flex flex-col'>
          {step < 3 && (
            <button
              onClick={nextStep}
              type="button"
              className="px-6 py-2 my-1 rounded-full bg-[#11111136] text-white "
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="px-6 py-2 my-1 rounded-full bg-[#11111136] text-white ">
              Submit
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default AgentReg;
