
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="akgundogduesr@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="543 648 22 04" Image={FiPhone} />
      <SingleInfo text="İstanbul , Türkiye" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
