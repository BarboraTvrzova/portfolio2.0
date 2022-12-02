import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const projects = [
  {
    key: 7,
    name: "Shortly",
    color: "#84b8a6",
    description:
      "This project required to build a simple app that lets user shorten a url. I have used Next.js and SCSS for styling, for functionality I used shrtco.de API. It was a simple application that only has one functionality. All links transition are for design purposes only. The sole functionality is to add a valid urls and get a short links that can ve copied to clipboard.",
    technologies: "Next.js, SCSS",
    url: "https://barbora-t-url-shortener.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    key: 7,
    name: "Coffee",
    color: "#b89184",
    description:
      "This project required to build a website for coffee roasting company. I have used Next.js and SCSS for styling. It was a simple website that presents a product and allows the users to select their prefered coffee delivery options.",
    technologies: "Next.js, SCSS",
    url: "https://barbora-t-coffeeroasters.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    key: 6,
    name: "Wedding",
    color: "#e3bfcf",
    description:
      "This was a very personal project as it is an invitation for my wedding. We created this website with my now husband, I took care of the front-end, he did the back-end.",
    technologies: "React.js, CSS",
    url: "https://jeff-bara-wedding-2022.netlify.app/",
    background:
      "As I mentioned previously, this was a very personal project. The goal was to send an invitation for our wedding to our friends and collect the list of attendees, find out about their plus ones and possible special dietary needs. The challenging part was that I did not have any design, so I used various wedding websites as an inspiration and created this one myself.",
  },
  {
    key: 5,
    name: "Planets",
    description:
      "This project required to build out a planets facts site. I have used React.js and thanks to conditional rendering, I was able to create this interactive 1 page site with all the different information.",
    color: "#d9ccd1",
    technologies: "React.js, CSS",
    url: "https://barbora-t-planets.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    key: 4,
    name: "Dine",
    description:
      "This project was to build a simple 2-page restaurant website which that also enables guests to ask for a reservation. I have used React.js and React Datepicker which I customized to fit the design.",
    color: "#a18d8c",
    technologies: "React.js, CSS",
    url: "https://barbora-t-restaurant-booking.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    key: 3,
    name: "Crowdfund",
    description:
      "This design required to build out a crowdfunding site. I have used React.js to complete the design. The page is not connected to any database and numbers are just for imagination.",
    color: "#b1b4c3",
    technologies: "React.js, CSS",
    url: "https://barbora-t-crowdfunding-page.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
  {
    key: 2,
    name: "Agency",
    description: "This is a simple landing page created using HTML and CSS. ",
    color: "#e2e2ee",
    technologies: "HTML, CSS, JavaScript",
    url: "https://barbora-t-purple-design.netlify.app",
    background:
      "This was the first website I built. I have found the design on Sketch free designes website and decided to recreate it. Original design file doesn't include any tablet or mobile designes so I have attempted to make the page suitable for different screen sizes myself.",
  },
  {
    key: 1,
    name: "Pod",
    description: "This is a simple landing page created using HTML and CSS. ",
    color: "#b1b4c3",
    technologies: "HTML, CSS, JavaScript",
    url: "https://barbora-t-pod-landing-page.netlify.app",
    background:
      "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  },
];

function App() {
  const [activeProject, setActiveProject] = useState("");

  const showProject = (project) => {
    setActiveProject(project);
  };

  useEffect(() => {
    console.log(activeProject);
  }, [activeProject]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route isExact path="/portfolio">
            <Portfolio
              projects={projects}
              showProject={showProject}
              activeProject={activeProject}
            />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
