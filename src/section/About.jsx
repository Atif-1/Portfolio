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
];

const skills=[
    "HTML",
    "CSS",
    "Javascript/Typescript",
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "Github",
    "AWS",
    "VS Code",
    "Postman"
];
export const About=()=>{
    return <section id="about" className="py-20 relative overflow-hidden px-4">
  {/* Technologies Marquee */}
  <div className="max-w-5xl mx-auto mb-16 animate-fade-in animation-delay-600">
    <p className="text-lg text-muted-foreground text-center mb-6">Technologies I work with</p>
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((skill, i) => (
          <div key={i} className="flex-shrink-0 px-6 py-4">
            <span className="text-lg font-semibold text-muted-foreground/60 hover:text-muted-foreground transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* About Content */}
  <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Text Side */}
      <div className="space-y-6">
        <div className="animate-fade-in animation-delay-700">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-secondary-foreground animate-fade-in animation-delay-100 break-words">
          Exploring digital world,
          <span className="font-serif italic text-white font-normal"> one technology at a time.</span>
        </h2>
        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-base sm:text-lg break-words">
          <p>
            I am a motivated software developer with 1+ years of professional experience building web applications using Node.js and Express. I have hands-on experience creating responsive front-ends with HTML, CSS, JavaScript, Node.js, Express.js, MySQL, and React Native. I deliver production-ready features and write clean, modular code.
          </p>
          <p>
            I’m eager to grow into a full-time software engineer role where I can contribute immediately and learn new technologies. I enjoy tackling backend challenges—API design, authentication, performance tuning, and database optimization—while staying comfortable on the front end to deliver end-to-end solutions. I’m also interested in learning AI and using ML and LLM tools to enhance product experiences.
          </p>
        </div>
        <div className="glass p-5 rounded-2xl glow-border animate-fade-in animation-delay-400">
          <p className="text-base font-medium italic text-foreground break-words">
            "My ambition is to become a trusted engineering partner who consistently delivers high-impact features and get skilled enough to develop a full scalable product alone."
          </p>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
        {highlight.map((item, idx) => (
          <div
            key={idx}
            className="min-w-0 glass p-5 rounded-xl animate-fade-in"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/30">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

</section>  
}
