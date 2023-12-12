import React from 'react';

interface ModalContentProps {
    closeModal: () => void;
  }
  
  const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
    return (
        <main className="text-[#fff] flex flex-col items-center justify-center text-center gap-4 p-2">
                <img src="./img/congratulation.png" alt="" className='w-[70%]' loading='lazy'/>

            <div>
            <h1 className='text-[18px] sm:text-[25px] font-semibold'>Congratulations</h1>
            <h1 className='text-[18px] sm:text-[25px] font-semibold'>you have successfully Registered!</h1>
            <p className='text-[14px] font-medium'>Yes, it was easy and you did it!</p>
            <p className='text-[14px] font-medium'>check your mail box for next step</p>
            <button onClick={closeModal}
            className='btn w-full p-2 rounded-sm mt-4'>Back</button>
            </div>
        </main>
     );
}
 
export default ModalContent;