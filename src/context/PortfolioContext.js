import java from '../img/java.png';
import Python from '../img/python.webp';
import mongodb from '../img/mongodb.jpg';
import node from '../img/node.png';
import reactjs from '../img/reactjs.png';
import spring from '../img/spring.png';
import css from '../img/css.jpg';
import html from '../img/html.png';
import springboot from '../img/springBoot.jpg';
import { createContext } from 'react';
import ur_sharthi1 from '../img/ur_sharthi1.png'
import notes1 from '../img/notes1.png'
import prime1 from '../img/prime1.png'
import ml from '../img/mlCertificate.png'
import r_programing from '../img/r_programming.png'
import tableau from '../img/tableau.png'
import nodejsCetificate from '../img/nodejsCertificate.png'
import mernStackCertificate from '../img/trainingMernStack.png'
import powerBiProject from '../img/powerBiProject.png'
import theDresser from '../img/theDresser.png'

// Step 1
export const portfolioContext = createContext();

// Step 2
export default function PortfolioContextProvider({ children }) {
    const ProjectItems = [
        { id: 1, logo: mongodb, name: "MongoDB" },
        { id: 2, logo: java, name: "Java" },
        { id: 3, logo: Python, name: "Python" },
        { id: 4, logo: node, name: "NodeJs" },
        { id: 5, logo: spring, name: "Spring" },
        { id: 6, logo: reactjs, name: "ReactJs" }
    ];

    const ExperienceItems = [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: mongodb, name: "MongoDB" },
        { id: 4, logo: java, name: "Java" },
        { id: 5, logo: Python, name: "Python" },
        { id: 6, logo: reactjs, name: "ReactJs" },
        { id: 7, logo: spring, name: "Spring" },
        { id: 8, logo: springboot, name: "SpringBoot" },
        { id: 9, logo: node, name: "NodeJs" }
    ];

    const AboutmeData =
        'A web developer is a professional who specializes in creating and maintaining websites and web applications. They combine technical skills in programming languages such as HTML, CSS, JavaScript, and back-end languages like Python, Ruby, or PHP to build dynamic and responsive user interfaces. Web developers work closely with designers to bring visual designs to life and ensure that sites are user-friendly and accessible.';

        const AboutData = {
            education: [
              { title: "Bachelor of Technology - Computer Science and Engineering", institution: "Lovely Professional University", duration: "2022 – Present" },
              { title: "Intermediate (12th)", institution: "BHAGWANPUR COLLEGE", duration: "2018 – 2020" },
              { title: "Matriculation (10th)", institution: "UMS JUAFFAR", duration: "2016 – 2018" },
              { title: "Full-Stack Web Development Training", institution: "CipherSchools", duration: "Jun 2024 – Jul 2024" },
              ],
          
            skill_experience: [
              {
                category: "Programming Languages",
                skills: [
                  { name: "C++", imgUrl: "https://th.bing.com/th/id/OIP.Fzdk6hc9sVxoZlkn3_N-mQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JavaScript", imgUrl: "https://th.bing.com/th/id/OIP.8lG71Gr7LODSWlZITL-NfwHaHa?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "R Programming", imgUrl: "https://th.bing.com/th?q=R+Programming+Logo+No+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock" },
                  { name: "Java", imgUrl: "https://th.bing.com/th/id/OIP.qI8zjBr4HClaAvkTP2ZzpwHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Databases & Tools",
                skills: [
                  { name: "MongoDB", imgUrl: "https://th.bing.com/th/id/OIP.j3YhzxdAI2oEN4DQUq26wwHaDt?w=333&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "MySQL", imgUrl: "https://th.bing.com/th/id/OIP.N-EzPm0vVtDmkP4afj9kAgHaEo?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Excel", imgUrl: "https://th.bing.com/th/id/OIP.chmccn7yfkv2Z25qrZHxzwHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Tableau", imgUrl: "https://th.bing.com/th/id/OIP.pbwZ69rdHGorlqXWfG8SDQHaBx?w=308&h=83&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Power BI", imgUrl: "https://th.bing.com/th/id/OIP.L2XFx35QtcEYDePQ44DgwQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Development Tools",
                skills: [
                  { name: "Git", imgUrl: "https://th.bing.com/th/id/OIP.SrJea1F5IEm-u0W_QfFi6wHaEK?w=1536&h=864&rs=1&pid=ImgDetMain" },
                  { name: "GitHub", imgUrl: "https://th.bing.com/th/id/OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "HTML", imgUrl: "https://th.bing.com/th/id/OIP.S-sXozyvtrUrtTzemQXpFwHaEK?w=339&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "CSS", imgUrl: "https://th.bing.com/th/id/OIP.F3-e7zCL-kHsXcb8odZpqAHaFP?w=204&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "TailWind CSS", imgUrl: "https://th.bing.com/th/id/OIP.MNndCdi_PnXQdTCOoMLM9QHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "React Js", imgUrl: "https://th.bing.com/th/id/OIP.-i781M2JNO6ZYT5VetHsSAHaDt?w=321&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Express", imgUrl: "https://th.bing.com/th/id/OIP.lt9WI3J34Khu2UxzAe_QnQHaER?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "Node js", imgUrl: "https://th.bing.com/th/id/OIP.m5RYM_Wkj4LsZewpigV5tgHaDf?w=349&h=164&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "JWT", imgUrl: "https://th.bing.com/th/id/OIP.W8YX-Hxj-2vHX1FBwcj-dAHaEK?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
                  { name: "REST APIs", imgUrl: "https://th.bing.com/th/id/OIP.6QTSZNxNredTYB0NdUZBHgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" }
                ]
              },
              {
                category: "Soft Skills",
                skills: [
                  { name: "Problem-Solving" },
                  { name: "HardWorking" }
                ]
              }
            ],
          
            professional_experience: [
              {
                title: "Backend Developer",
                company: "UR-SARTHI (Live Project)",
                duration: "Jun 2024 – Aug 2024",
                techUsed: [
                  "Node.js", "Express.js", "MongoDB", "Zegocloud", "Razorpay", "Socket.io"
                ],
                imgUrl: ur_sharthi1,
                gitHubLink: "https://github.com/kumarrohit2002/UR_Sarthi-User",
                deployedLink: 'https://ur-sarthi-user.vercel.app/'
              },
              {
                title: "Full Stack Developer Training",
                company: "CipherSchools",
                duration: "Jun 2024 – Jul 2024",
                techUsed: [
                  "React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"
                ],
                imgUrl: notes1,
                gitHubLink: "https://github.com/kumarrohit2002/Notes.me-App",
                deployedLink: 'https://notes-me-app.vercel.app/'
              },
              {
                title: "the Dresser",
                company: "Amazon Prime Dashboard",
                duration: "Sep 2024 – oct 2024",
                techUsed: [
                  "Tableau", "Data Visualization", "Charts", "Dashboard Design"
                ],
                imgUrl: theDresser,
                gitHubLink: "https://github.com/kumarrohit2002/E_commerce/",
                deployedLink: "https://e-commerce-beta-vert.vercel.app/"
              },
              {
                title: "Data Analyst",
                company: "Amazon Prime Dashboard",
                duration: "Sep 2024 – oct 2024",
                techUsed: [
                  "Tableau", "Data Visualization", "Charts", "Dashboard Design"
                ],
                imgUrl: prime1,
                gitHubLink: "#",
                deployedLink: "#"
              },
              {
                title: "Data Analyst",
                company: "Amazon Prime Dashboard",
                duration: "Sep 2024 – oct 2024",
                techUsed: [
                  "Tableau", "Data Visualization", "Charts", "Dashboard Design"
                ],
                imgUrl:powerBiProject,
                gitHubLink: "#",
                deployedLink: "#"
              },
            ],
            
            certificates: [
              { title: "R Programming", institution: "Coursera", duration: "Aug 2024 – Oct 2024", img: r_programing },
              { title: "Data Analysis with Tableau", institution: "Coursera", duration: "Sep 2024 – Nov 2024", img: tableau },
              { title: "Full Stack Development Using Mern", institution: "CipherSchools", duration: "Jun 2024 – Aug 2024", img: mernStackCertificate },
              { title: "Supervised Machine Learning: Regression and Classification", institution: "Coursera", duration: "Jun 2024 – Jul 2024", img: ml },
              { title: "NodeJs API for Beginners with MongoDB", institution: "Udemy", duration: "Jan 2025 – Mar 2025", img: nodejsCetificate },
            ],
            
          
            achievements: `Solved 200+ coding problems on LeetCode & GeeksforGeeks (2024)`,
          
            mission_statement: `My mission is to leverage my skills and creativity to deliver innovative software engineering solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.`
          };
          

    const value = {
        ExperienceItems,
        ProjectItems,
        AboutmeData,
        AboutData
    };

    // Step 3
    return (
        <portfolioContext.Provider value={value}>
            {children}
        </portfolioContext.Provider>
    );
}
