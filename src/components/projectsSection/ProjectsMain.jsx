import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";



const projects = [
  {
    name: "E-Commerce Project",
    // year: "Mar 2022",
    align: "right",
    image: "1.PNG",
    link: "https://github.com/Esrakgun/e-Commerce-Project",
    project: "A stylish and responsive e-commerce front-end designed for modern shoppers.",
  },
  {
    name: "Flight Radar Project",
    // year: "Sept 2022",
    align: "left",
    image: "2.PNG",
    link: "https://github.com/Esrakgun/flightRadar-Proje",
    project: "Real-time flight tracking interface using external API integrations.",
  },
  {
    name: "Food Delivery Clone",
    // year: "Jan 2023",
    align: "right",
    image: "3.PNG",
    link: "https://github.com/Esrakgun/Yemek-Sepeti-Clone-Project",
    project: "A food delivery platform clone showcasing restaurants, locations, and orders.",
  },
  {
    name: "Fashion Blog Project",
    // year: "May 2024",
    align: "left",
    image: "4.PNG",
    link: "https://github.com/Esrakgun/Fashion-Blog",
    project: "A chic blog for fashion lovers, designed with elegance and flair.",
  },
  {
    name: "QR Menu Project",
    // year: "May 2024",
    align: "right",
    image: "6.PNG",
    link: "https://github.com/Esrakgun/Qr-Menu-Project",
    project: "A digital QR-based menu app for restaurants and cafes.",
  },
  {
    name: "Crypto Tracker Project",
    // year: "May 2024",
    align: "left",
    image: "5.PNG",
    link: "https://github.com/Esrakgun/CryptoMetrics-Project",
    project: "A clean dashboard for tracking cryptocurrencies and market trends.",
  },
  {
    name: "Flicks & Frames",
    // year: "May 2024",
    align: "right",
    image: "7.PNG",
    link: "https://github.com/Esrakgun/Flicks-Frames",
    project: "A sleek movie website to explore popular titles and trailers.",
  },
 {
  name: "JBL Website Project",
  align: "left",
  image: "8.PNG",
  link: "https://github.com/Esrakgun/JBL-Website",
  project: "A modern, product-focused homepage inspired by JBL branding.",
},
{
  name: "Amazon Clone",
  align: "right",
  image: "9.PNG",
  link: "https://github.com/Esrakgun/Amazon-Clone",
  project: "A responsive Amazon landing page clone with dynamic product display.",
},
{
  name: "NoteKeeper Project",
  align: "left",
  image: "10.PNG",
  link: "https://github.com/Esrakgun/Notekeeper-project",
  project: "A simple and clean note-taking app to help users stay organized.",
},
{
  name: "YouTube Clone",
  align: "right",
  image: "11.PNG",
  link: "https://github.com/Esrakgun/YoutubeClone-Project",
  project: "A frontend YouTube interface clone with video preview layout.",
},
{
  name: "SnapEats Project",
  align: "left",
  image: "12.PNG",
  link: "https://github.com/Esrakgun/SnapEats_Project",
  project: "A vibrant food delivery website designed with Bootstrap and SVG icons.",
},
{
  name: "Ice Cream Project",
  align: "right",
  image: "13.PNG",
  link: "https://github.com/Esrakgun/iceCream--Project",
  project: "A colorful ice cream shop site with playful visuals and layout.",
},
{
  name: "Covid Map Project",
  align: "left",
  image: "14.PNG",
  link: "https://github.com/Esrakgun/CovidMAP-Project",
  project: "An interactive map visualizing global COVID-19 statistics.",
},
{
  name: "Chat App Project",
  align: "right",
  image: "15.PNG",
  link: "https://github.com/Esrakgun/Chat-App",
  project: "A simple real-time chat interface with clean design.",
},
{
  name: "BookWorm Project",
  align: "left",
  image: "16.PNG",
  link: "https://github.com/Esrakgun/KitapKurdu-Proje",
  project: "A book-lover’s haven featuring categorized titles and reading suggestions.",
},
{
  name: "Testing Authentication Project",
  align: "right",
  image: "17.PNG",
  link: "https://github.com/Esrakgun/testing-Authentication",
  project: "Authentication workflows including login, signup, and password reset.",
},
{
  name: "Twitter Clone Project",
  align: "left",
  image: "18.PNG",
  link: "https://github.com/Esrakgun/TwitterClone_Project",
  project: "A minimalist Twitter-style feed design with post interaction.",
},
{
  name: "MovieAPP Project",
  align: "right",
  image: "19.PNG",
  link: "https://github.com/Esrakgun/MovieAPP",
  project: "A movie browser that fetches real-time data via an API.",
},
{
  name: "Hotel Project",
  align: "left",
  image: "21.PNG",
  link: "https://github.com/Esrakgun/Hotel",
  project: "A hotel booking UI with room previews and pricing layout.",
},
{
  name: "Rent A Car Project",
  align: "right",
  image: "22.PNG",
  link: "https://github.com/Esrakgun/rent-a-car",
  project: "A vehicle rental platform with location-based selection.",
},
{
  name: "Fitness Application Project",
  align: "left",
  image: "24.PNG",
  link: "https://github.com/Esrakgun/Fitness-Application",
  project: "A stylish fitness app interface with workout plans and timers.",
},
{
  name: "Tripster TanstackQuery Project",
  align: "right",
  image: "25.PNG",
  link: "https://github.com/Esrakgun/Tripster_TanstackQueryProject",
  project: "A travel listing app using TanStack Query for fetching trip data.",
},
{
  name: "KickShoes Project",
  align: "left",
  image: "26.PNG",
  link: "https://github.com/Esrakgun/KickShoes_Project",
  project: "A modern shoe store landing page with focus on style and design.",
},
{
  name: "Grocery Project",
  align: "right",
  image: "27.PNG",
  link: "https://github.com/Esrakgun/groceryproject",
  project: "A responsive grocery store UI to showcase daily essentials.",
},
{
  name: "Admindashboard Project",
  align: "left",
  image: "28.PNG",
  link: "https://github.com/Esrakgun/admindashboard-project",
  project: "An admin dashboard layout with charts, cards and controls.",
},
{
  name: "CineScope Project",
  align: "right",
  image: "29.PNG",
  link: "https://github.com/Esrakgun/CineScope",
  project: "A sleek film listing app with genre filters and modern UI.",
}
];




const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}          //{/* 🟡 EKLENDİ */}
              project={project.project}   //{/* 🟡 EKLENDİ */}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;