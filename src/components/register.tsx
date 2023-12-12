import { useState } from "react";
import CustomModal from "./CustomModal";
import ModalContent from "./ModalContent";

const RegisterForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formValues, setFormValues] = useState({
      teamName: '',
      phone: '',
      email: '',
      projectTopic: '',
      category: '',
      groupSize: '',
      agreed: false,
    });
  
    const openModal = () => {
      if (isFormFilled()) {
        setIsModalOpen(false);
      } else {
        setIsModalOpen(true);
      }
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const isFormFilled = () => {
      return (
        formValues.teamName.trim() !== '' &&
        formValues.phone.trim() !== '' &&
        formValues.email.trim() !== '' &&
        formValues.projectTopic.trim() !== '' &&
        formValues.category.trim() !== '' &&
        formValues.groupSize.trim() !== '' &&
        formValues.agreed
      );
    };
  
    const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
      const event = e as unknown as React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
      const { name, value, type } = event.target;
  
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent the default form submission behavior
      console.log(formValues)
      openModal();
    };
  
    return (
      <main className="relative grid items-center justify-center w-full bg-darkpurple overflow-hidden pt-[50px] pb-[100px] lg:pb-0 lg:h-[100vh] h-[100%] px-[5%]" id="contact">
        <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 w-full pb-[10px] lg:pb-0">
          <div className="relative z-10">
            <img src="./img/register.png" alt="" className="dangling-picture relative z-10" />
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute top-[-100px] left-[200px] lg:left-[-300px] z-0" />
          </div>
  
          <div className="relative z-10 p-2 lg:p-5 rounded-xl bg-none lg:bg-lite-grey ">
            <div className="grid gap-2 mb-5">
              <h3 className="text-[20px] text-purple font-bold" data-aos="fade-down">Register</h3>
              <div className="flex items-center">
                <p className="text-[14px] text-white font-mon" data-aos="fade-down">Be part of this movement!</p>
                <img src="./img/movement.png" alt="" data-aos="fade-down" />
              </div>
  
              <h1 className="text-white text-[20px] font-mon" data-aos="fade-down">CREATE YOUR ACCOUNT</h1>
            </div>
  
            <form action="" className="relative z-10" onChange={handleInputChange} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-6">
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Team Name
                  <input type="text" name="teamName" placeholder="Enter the name of your group" className="input font-mon" required />
                </label>
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Phone
                  <input type="text" name="phone" placeholder="Enter your phone number" className="input font-mon" required />
                </label>
              </div>
  
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-6">
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Email
                  <input type="email" name="email" placeholder="Enter your email address" className="input font-mon" required />
                </label>
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Project Topic
                  <input type="text" name="projectTopic" placeholder="What is your group project topic" className="input font-mon" required />
                </label>
              </div>
  
              <div className="grid grid-cols-2 items-center gap-2 lg:gap-6">
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Category
                  <select id="" name="category" className="select" required>
                    <option value="" className="bg-darkpurple">--Select--</option>
                    <option value="" className="bg-darkpurple">Frontend</option>
                    <option value="" className="bg-darkpurple">Backend</option>
                    <option value="" className="bg-darkpurple">UI/UX</option>
                    <option value="" className="bg-darkpurple">DevOps</option>
                  </select>
                </label>
                <label htmlFor="" className="labels font-mon" data-aos="fade-down">Group Size
                  <select name="groupSize" id="" className="select" required>
                    <option value="" className="bg-darkpurple rounded-sm">--Select--</option>
                    <option value="" className="bg-darkpurple">2</option>
                    <option value="" className="bg-darkpurple">4</option>
                    <option value="" className="bg-darkpurple">6</option>
                    <option value="" className="bg-darkpurple">8</option>
                  </select>
                </label>
              </div>
  
              <p className="text-[12px] text-pink font-mon" data-aos="fade-down">Please review your registration details before submitting</p>
  
              <div className="flex my-2">
                <label htmlFor="" className="labels font-mon flex flex-row-reverse gap-2 items-center" data-aos="fade-down">I agreed with the event terms and conditions and privacy policy
                  <input type="checkbox" name="agreed" required />
                </label>
              </div>
  
              <div className="flex items-center justify-center">
                <button
                  className="px-16 py-3 btn text-white text-[16px] rounded-sm w-full"
                  data-aos="fade-down"
                  type="submit"
                >
                  Register Now
                </button>
              </div>
            </form>
  
            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <ModalContent closeModal={closeModal} />
            </CustomModal>
  
            <img src="./img/hero-purple-lens-left.png" alt="" className="absolute bottom-[-100px] lg:bottom-[-200px] lg:right-[-350px] right-[200px] z-0" />
          </div>
        </section>
  
        <img src="./img/whitestar.png" alt="" className="absolute top-[300px] right-[700px] animate-pulse w-4" />
        <img src="./img/greystar.png" alt="" className="absolute bottom-[350px] left-[150px] animate-pulse w-4" />
  
        <img src="./img/litepurplestar.png" alt="" className="absolute top-[450px] left-[100px] animate-pulse w-4" />
        <img src="./img/purplestar.png" alt="" className="absolute bottom-[400px] right-[150px] animate-pulse w-4" />
      </main>
    );
  };
  
  export default RegisterForm;
  