


import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    // company: "Mimcode",
    // date: "2024 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale applications.",
      "Improving web application performance.",
      "Collaborating with designers on user interfaces.",
      "Ensuring cross-browser compatibility and clean code.",
    ],
  },
  {
    job: "Sharing Knowledge, Growing Together.",
    // company: "Mimcode",
    // date: "2024 - Present",
    responsibilities: [
      "Sharing knowledge about web development.",
      "Working with JavaScript, React & TailwindCSS.",
      "Helping peers solve technical problems.",
      "Creating learning resources for others.",
      "Optimizing code for better performance.",
    ],
  },
  {
    job: "Contributing and Simplifying Learning.",
    // company: "Mimcode",
    // date: "2024 - Present",
    responsibilities: [
      "Preparing examples to simplify learning.",
      "Writing clear explanations for complex concepts.",
      "Debugging and improving application code.",
      "Creating resources to enhance learning for others.",
      "Learned how to work well in groups."
    ],
  },
      
  {
    job: "Supporting Others, Growing Together.",
    // company: "Mimcode",
    // date: "2024 - Present",
    responsibilities: [
      "Reviewing and helping with assignments.",
      "Providing support when peers face challenges.",
      "Collaborating with peers to solve problems.",
      "Giving constructive feedback on work.",
      "Motivating peers to keep learning.",
    ],
  },
  {
    job: "Beyond Technical Skills.",
    // company: "Mimcode",
     // date: "2024 - Present",
    responsibilities: [
      "Learning technical skills and empathy.",
      "Collaborating and working well in teams.",
      "Improving communication and problem-solving abilities.",
      "Embracing challenges as growth opportunities.",
      "Understanding the impact of coding on real-world problems.",
    ],
  }
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between gap-1 ">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 4 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
              <FaArrowRightLong className="text-2xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

