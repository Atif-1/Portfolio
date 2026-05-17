import {AlertCircle, CheckCircle, Mail, Send} from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";
import { GrContactInfo } from "react-icons/gr";
const info=[
    {
        icon:Mail,
        label:"Email",
        value:"atif1712001@gmail.com",
        href:"mailto:atif1712001@gmail.com"
    },

]

export const Contact=()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [submitStatus,setSubmitStatus]=useState({type:null,message:""});
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    });

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({type:null,message:""});
        try{
            const response=await fetch("http://localhost:3000/contact",{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            });
            console.log(response);
            if(response.status===200){
                setSubmitStatus({type:"success",message:"Form Submitted Successfully ! I will get back to you soon."});
                setFormData({
                    name:"",
                    email:"",
                    message:""
                })
            }
        }catch(err){
            console.log(err);
            setSubmitStatus({type:"failed",message:"Failed to submit form ! Please try again later."});
        }finally{
            setIsLoading(false);
        }
    }
    return <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl text-primary font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                        Let's build {" "}
                        <span className="font-serif italic font-normal text-white">something good.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a idea in mind?I'd love to hear about it.Send me a message to discuss the how we can work togather.    
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div  className="p-8 glass rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm  font-medium mb-2">Name</label>
                                <input id="name" type="text"
                                value={formData.name}
                                 onChange={(e)=>{setFormData({...formData,name:e.target.value})}} placeholder="Your name..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required/>
                            </div>
                            <div>
                                <label htmlFor="eamil" className="block text-sm  font-medium mb-2">Email</label>
                                <input id="email" type="email"
                                 value={formData.email}
                                 onChange={(e)=>{setFormData({...formData,email:e.target.value})}}  placeholder="your@email.com" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" required/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm  font-medium mb-2">Meassage</label>
                                <textarea rows={5} id="message" type="text" 
                                value={formData.message }
                                 onChange={(e)=>{setFormData({...formData,message:e.target.value})}}  placeholder="Enter message..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" required/>    
                            </div>
                            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                                {isLoading? <>Sending...</>  : <>Send Message<Send/></>}
                            </Button>
                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type=="success"?"bg-green-500/10 border border-green-500/20 text-green-400":"bg-red-500/10 border border-red-500/10 text-red-400"} `}>
                                    {submitStatus.type==="success"?(
                                        <CheckCircle className="w-5 h5 flex-shrink-0"/>):(
                                        <AlertCircle className="w-5 h5 flex-shrink-0"/>)
                                    }
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {info.map((item,i)=>(
                                    <a key={i} href={item.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-primary"/>
                                        </div>
                                        <div>
                                            <div className="text-smtext-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>    
                                ))}
                            </div>
                        </div>
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                I'm currently open to new opportunities and exciting projects.
                                Whether you need a full-time engineer or a freelance,
                                let's talk!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        
    </section>
}