import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion library
import Navbar from "../Navbar/Navbar";

function Projects() {
  const projects = [
    {
      title: "Blog App",
      description: "This is my first project in django. I have developed a blog app where user with his credentials can publish his posts and see other user's post A user can Like or Dislike another user's posts. A user can comment on another user's post.",
      githubLink: "https://github.com/Hammad7106/Blog_App"
    },
    {
      title: "Instagram Clone",
      description: "A clone of the popular social media platform Instagram with Authentication / Authurization. User can follow another user by sending follow request. User can add posts, stories for his profile. Only added followers can see each other's posts. Otherwise posts will be private",
      githubLink: "https://github.com/Hammad7106/Instagram_Clone"
    },
    {
      title: "Real-Time Chat Application",
      description: "To develop this app I have used Django Web Channels. For Real Time Data Communication I have used Redis labs Database is sqllite for storing message content of users. I have used AsyncWebConsumers in Web Sockets.So, the flow of messages is asynchronous.",
      githubLink: "https://github.com/Hammad7106/Chat_Application"
    },
    {
      title: "REST API's ( DRF )",
      description: "Created API's for a Student Model. I have used default methods for creating API's and then used Django Rest Framework to develop API's like :-.  @apiviews. Generic API Views and MIXINS. Viewsets and Routers",
      githubLink: "https://github.com/Hammad7106/Django_Rest_Framework/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial animation values
      animate={{ opacity: 1 }} // Animation when component is mounted
      exit={{ opacity: 0 }} // Animation when component is unmounted
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
     >
      <Navbar/>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 mt-5 font-serif">Projects</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Initial animation values
              animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transition duration and delay
              className="bg-white bg-opacity-80 shadow overflow-hidden rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <ul className="list-disc list-inside">
                  {project.description.split('. ').map((point, index) => (
                    <li key={index} className="mt-1 text-sm text-gray-900">{point.trim()}</li>
                  ))}
                </ul>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-black hover:text-blue-700"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
