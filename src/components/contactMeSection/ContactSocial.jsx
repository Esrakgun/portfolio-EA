
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/esraakg%C3%BCndo%C4%9Fdu/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Esrakgun" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/narla.scode/?next=%2F" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
