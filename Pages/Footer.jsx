
import { BsGithub } from "react-icons/bs";


const Footer = () => {

 

  return (
    <footer className= "bg-slate-800 text-white p-2.5 flex justify-center items-center w-full absolute bottom-0 left-0">
      <BsGithub className="mx-2" />
      <p>GitHub Profile Finder | © 2023 Rushikeh Patil</p>
    </footer>
  );
};

export default Footer;