import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButton } from "../components/AnimatedButton"

const projects=[
    {
        title:"Expense Tracker",
        description:"An expense tracker application with signup and login feature to manage the expenses.It also payment gateway for easy premium feature access and download expenses option.",
        image:"/projects/ET.png",
        tags:["HTML","CSS","Javascript","Node.js","Expresss","MySQL","Sequelize","AWS","Brevo","Payment Gateway"],
        link:"https://renderdep.onrender.com/signup.html",
        github:"https://github.com/Atif-1/ExpenseTrackerBackendLv"
    },
    {
        title:"Hotel Website",
        description:"A simple hotel website using html,css.",
        image:"/projects/HW.png",
        tags:["HTML","CSS"],
        link:"",
        github:"https://github.com/Atif-1/Hotel-Website"
    }
]
export const Projects=()=>{
    return (
        <section id="projects" className="py-12 relative overflow-hidden">
            {/*background glow*/}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 lef-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
            <div className="container mx-auto px-6 relative z-10">
                {/*Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-6 mb-6 animate-fade-in animation-delay-100">
                        Projects that
                        <span className="text-foreground font-serif italic">{" "}make an impact</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">My personal projects where i implemented my acquired skills</p>
                </div>
                {/*Projects cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project,idx)=>(
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay:`${(idx+1)*100}ms`}}>
                            <div className="relative overflow-hidden aspect-video">   
                                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-Transform duration-700 group-hover:scale-110 group-hover:opacity-60"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                                 {/* Overlay Links */}
                                <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-98 [@media(hover:none)]:opacity-98 transition-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5"/>
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                            {/*Project Card Content*/}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"/>
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag,idx)=>(
                                        <span key={idx} className="px-4 py-1.5 glass rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton><a href="https://github.com/Atif-1">View All
                         </a><ArrowUpRight className="w-5 h-5"/>
                    </AnimatedBorderButton>
                </div>
            </div>

        </section>
    )
}
