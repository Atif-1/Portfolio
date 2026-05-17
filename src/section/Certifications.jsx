import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const certificates=[
    {
        title:"Modernizing Java EE Applications (07/2020)",
        description:"Completed a Java Certification. Covered Basics of Object-Oriented Programming with Java,its syntax, and application",
        url:"",
        badge:"",
        image:"/certs/cert1.png"
    },
    {
        title:"HTML(2020)",
        description:"Completed a HTML,its syntax, and application",
        url:"",
        badge:"",
        image:"/certs/cert2.jpg"
    },
    {
        title:"CSS(2021)",
        description:"Completed a CSS,its syntax, and application",
        url:"",
        badge:"",
        image:"/certs/cert3.jpg"
    }
]
    export const Certifications=()=>{
        const [activeIdx,setActiveIdx]=useState(0); 
        const next=()=>{
            setActiveIdx((prev)=>(prev+1)%certificates.length)
        }
        const previous=()=>{
            setActiveIdx((prev)=>(prev-1+certificates.length)%certificates.length)
        }
        return <section id="Certificate" className="py-32 relative overflow-hidden">   
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
                <div className="container mx-auto px-6 relative z-10">
                    {/* header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            What I earn
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100  text-secondary-foreground">Certification of <span className="font-serif italic font-normal text-white">course completion</span>
                        </h2>
                    </div>
                

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="glass p-8 rouded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
                                    <Quote className="w-6 h-6 text-primary-foreground"/>
                                </div>
                                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 ">
                                    "{certificates[activeIdx].description}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <img src={certificates[activeIdx].image} alt='cert_image' className=" object-cover w-14 h-14 rounded-full ring-2 ring-primary/20 cursor-pointer  " onClick={()=>{window.open(certificates[activeIdx].image,"_blank","noopener,noreferrer")}}/>
                                    <div>
                                        <div className="font-semibold text-muted-foreground">{certificates[activeIdx].title}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Certification Navigation */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                    <ChevronLeft/>
                                </button>
                                <div className="flex gap-4">
                                    {certificates.map((_,idx)=>(
                                        <button key={idx} onClick={()=>setActiveIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx===activeIdx?"w-8 bg-primary":"bg-muted-foreground/30  hover:bg-muted-foreground/50"} `}/>
                                    ))}
                                </div>
                                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                                    <ChevronRight/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          
        </section>
    }