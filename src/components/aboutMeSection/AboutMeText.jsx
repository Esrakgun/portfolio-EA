
import { Link } from "react-scroll";

const AboutMeText = () => {
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p className="text-white">
                I'm Esra, a software developer who has just started my journey in web development. Currently, I'm taking courses in React and frontend development. In the future, I plan to take courses in backend and React Native as well. Through my training, I aim to develop real-world projects and learn modern web technologies. I also love sharing what I’ve learned to inspire others. I’ve taken the first steps toward a successful career in the tech world and am continuously improving myself along the way.
            </p>
            <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to="projects"
                    className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
                >
                    My Projects
                </Link>
            </button>
        </div>
    );
};

export default AboutMeText;
