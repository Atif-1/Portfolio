import { Code2, Lightbulb, Rocket, User } from "lucide-react"
const highlight=[
    {
        icon:Code2,
        title:"Clean Code",
        description:"Writing maintainable ,scalable code using MVC design."
    },
    {
        icon:Rocket,
        title:"Performance",
        description:"Optimizing for speed and delivering fast user experiences."
    },
    {
        icon:User,
        title:"Collaboration",
        description:"Working closely to bring best outcome."
    },
    {
        icon:Lightbulb,
        title:"Innovation",
        description:"Using the latest technologies and best pratices."
    }
]
export const About=()=>{
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container relative mx-auto px-6 z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="animate-fade-in animation-delay-700">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground animate-fade-in animation-delay-100">
                        Exploring digital world,
                        <span className="font-serif italic text-white font-normal"> one technology at a time. </span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-lg">
                        <p>
                           I am a motivated software developer with 1+ years of professional experience building web applications using Node.js and Express. I have hands-on experience creating responsive front-ends with HTML, CSS and javascript,Node.js,Express.js,MySQL,React-Native. I deliver production ready features, write clean modular code. 
                        </p>
                        <p>
                            I’m eager to grow into a full-time software engineer role where I can contribute immediately and learn new technologies. I enjoy tackling backend challenges API design, authentication, performance tuning and database optimization while staying comfortable on the front end to deliver end-to-end solutions. I’m also interested in learning AI and using ML and LLM tools to enhance product experiences.
                        </p>
                    </div>
                    <div className="glass p-6 rounded-2xl glow-border animate-fade-in animation-delay-400">
                        <p className="text-lg font-medium italic text-foreground">
                            "My ambition is to become a trusted engineering partner who consistently delivers high‑impact features and get skilled enough to develop a full scalable products alone."
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlight.map((item,idx)=>(
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                           <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/30 mb-6"><item.icon className="w-7 h-7 text-primary"/></div>
                           <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                           <p className="text-md text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}