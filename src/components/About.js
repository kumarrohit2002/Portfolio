import { useContext } from "react";
import { motion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";

function About() {
    const { AboutData } = useContext(portfolioContext);

    const formatWithNewLine = (text) => {
        if (typeof text === "string") {
            return text.split(',').map((item, index) => (
                <div key={index}>{item.trim()}</div>
            ));
        }
        if (Array.isArray(text)) {
            return text.map((item, index) => {
                if (typeof item === 'string') return <div key={index}>{item}</div>;
                if (typeof item === 'object') return <div key={index}>{item.name}</div>;
                return null;
            });
        }
        return null;
    };

    const ImageCard = ({ imgUrl, name }) => (
        <motion.li
            className="flex flex-col items-center rounded-md border-2 border-gray-300 text-center p-2 shadow-md hover:shadow-2xl hover:shadow-current hover:scale-x-150 transition duration-300"
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.4 }}
        >
            <img
                src={imgUrl}
                alt={`${name} icon`}
                className="w-80 h-52 rounded-md mb-1 object-cover"
            />
            <span>{name}</span>
        </motion.li>
    );

    if (!AboutData) return <p>Loading...</p>;

    return (
        <motion.section
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-3xl font-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About
            </motion.h1>
            <p>Aspiring Software Engineer | Building command in MERN Stack Web Development | Data Science</p>
            <br />
            {/* -------------------------------------------------- Education and Training -------------------------------------------------- */}
            <motion.h2 className="text-green-500 font-semibold text-xl">Education & Training</motion.h2>
            {AboutData.education?.map((item, index) => (
                <motion.div
                    key={index}
                    className="flex gap-2 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.institution} ({item.duration})</p>
                </motion.div>
            ))}
            <br />
            {/* -------------------------------------------------- Skills & Experience ------------------------------------------------ */}
            <motion.h2 className="text-green-500 font-semibold text-2xl">Skill & Experience</motion.h2>
            {AboutData.skill_experience?.map((item, idx) => (
                <div key={idx} className="mb-4">
                    <p className="font-semibold">{item.category}</p>
                    {item.category !== "Soft Skills" ? (
                        <motion.ul
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ml-4 p-4 border-2 border-gray-200 rounded-sm text-sm"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.15
                                    }
                                }
                            }}
                        >
                            {item.skills.map((skill, i) => (
                                <ImageCard key={i} imgUrl={skill.imgUrl} name={skill.name} />
                            ))}
                        </motion.ul>

                    ) : (
                        <ul className="list-disc list-inside ml-4">
                            {item.skills.map((skill, i) => (
                                <li key={i}>{skill.name}</li>
                            ))}
                        </ul>
                    )}

                </div>
            ))}


            <br />

            {/* ------------------------------------------------------- certifications ----------------------------------------------------- */}
            <motion.h2 className="text-green-500 font-semibold text-xl">Certificates</motion.h2>
            <motion.ul
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}>
                {AboutData.certificates?.map((cert, index) => (
                    <motion.li
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <img
                            src={cert.img}
                            alt={cert.title}
                            className="w-full    object-cover rounded-xl mb-3"
                        />
                        <div className="flex justify-between items-center">
                            <h3 className="text-md w-60 font-semibold text-gray-900 mb-1">{cert.title}</h3>
                            <div>
                                <p className="text-sm text-gray-600">{cert.institution}</p>
                                <p className="text-sm text-gray-500">{cert.duration}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
            <br />

            {/* --------------------------------------------------- Professional Experience---------------------------------------- */}

            <motion.h2 className="text-green-500 font-semibold text-xl">Professional Experience</motion.h2>
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 ">
                {AboutData.professional_experience?.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 border-2 min-h-96"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                        <p className="font-semibold flex gap-2 items-center m-2 justify-between text-lg">
                            <p>{index + 1}. {exp.title}, <span className="italic">{exp.company}</span></p>
                            <span className="text-sm text-gray-600"> ({exp.duration})</span>
                            
                        </p>
                        
                        <img className="shadow-md rounded-sm hover:shadow-2xl hover:shadow-current hover:scale-y-105 transition duration-300" src={exp.imgUrl} alt={exp.imgUrl} />

                        <div className="flex my-4">
                            <p className="flex items-center text-md w-32">
                                Tech Used:
                            </p>
                            <ul className="grid sm:grid-cols-3 lg:grid-cols-5 gap-1">
                                {exp.techUsed.map((point, idx) => (
                                    <li className="bg-blue-500 rounded-md px-2 py-1" key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-between mx-8 mb-4">
                            <a href={exp.deployedLink} className="text-blue-500 underline hover:text-blue-700" >Deployed Link</a>
                            <a href={exp.gitHubLink} className="text-blue-500 underline hover:text-blue-700">GitHub Link</a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <br />

            {/* ------------------------------------------------------- Achievements -------------------------------------------------- */}

            <motion.h2 className="text-green-500 font-semibold text-xl">Achievements & Awards</motion.h2>
            {formatWithNewLine(AboutData.achievements)}
            <br />
            {/* ------------------------------------------------Mission Statement -------------------------------------------------- */}
            <motion.h2 className="text-green-500 font-semibold text-xl">Mission Statement</motion.h2>
            {formatWithNewLine(AboutData.mission_statement)}

            <hr className="mt-5" />
        </motion.section>
    );
}

export default About;
