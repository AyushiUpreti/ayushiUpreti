import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import weather from "../assets/weather-app.png";
import news from "../assets/news-app.jpeg";
import textutils from  "../assets/textutils2.jpeg";
import tindog from "../assets/tindog.jpeg";

const Project=()=>{

    // const link=()=>{
        // <a href="https://github.com/AyushiUpreti/weather"/>
        // console.log("https://github.com/AyushiUpreti/weather")
    // }

    const portfolios=[
        {
            id:1,
            src:weather,
            title:"Weather App",
            Description:"An app made using react and OpenWeatherMap which on searching displays the current weather of that particular place.",
            link:"https://github.com/AyushiUpreti/weather"
            
        },
        {
            id:2,
            src:news,
            title:"NewsPower",
            Description:"An app made using react and NewsApi which fetches the latest news and displays them into different fields.",
            link:""
        },
        {
            id:3,
            src:textutils,
            title:"TextUtils",
            Description:"A simple react App which executes different operations on a text.",
            link:""
        },
        {
            id:4,
            src:tindog,
            title:"TinDog",
            Description:"A simple website made using html, css and bootstrap.",
            link:""
        }
    ];

    return(
        <section id="projects" className="pt-20 pb-40">
             <motion.div
             className="md:w-2/4 mx-auto text-center"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount:0.5}}
             transition={{duration:0.5}}
             variants={{
                 hidden:{opacity:0 , y:-50},
                 visible:{opacity:1, y:0}
             }} 
             >
            <p className="font-playfair font-semibold text-4xl">
                <span className="text-red">Pro</span>JECTS
            </p>
            <div className="flex justify-center mt-5 mb-20">
                <LineGradient width="w-1/4"/>
            </div>
            </motion.div> 
           

            {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.4}}
                    transition={{duration:0.4}}
                    variants={{
                        hidden:{opacity:0 , y:-50},
                        visible:{opacity:1, y:0}
                    }} 
                >

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id,src,title,Description,link})=>(
                    <div key={id} className="shadow-md shadow-pink-600 rounded-lg duration-200 hover:scale-105">
                        <img src={src} alt="weatherapp" className="rounded-md "/>
                        <button className="w-full mt-6 text-2xl">{title}</button>
                        <p className="text-justify mx-5 mb-5 mt-5">{Description}</p>
                        <div className="flex items-center justify-center my-5">
                        <button className="px-5 py-3 shadow shadow-pink-600 rounded-lg bg-pink-600 duration-200 hover:scale-105">View Project</button>
                        </div>
                    </div>

                    ))}
                    </div>
                    </motion.div>
                   
        </section>
    )
}

export default Project;