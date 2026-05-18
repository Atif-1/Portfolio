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
    return <section id="contact" className="py-20 relative overflow-hidden px-4">
  {/* Background Blurs */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-highlight/5 rounded-full blur-2xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
        Get In Touch
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-primary break-words">
        Let's build{" "}
        <span className="font-serif italic font-normal text-white">something good.</span>
      </h2>
      <p className="text-muted-foreground text-sm sm:text-base">
        Have an idea in mind? I'd love to hear about it. Send me a message to discuss how we can work together.
      </p>
    </div>

    {/* Form & Info Grid */}
    <div className="grid grid-cols-1 gap-8">
      {/* Contact Form */}
    {/*   <div className="p-6 glass rounded-2xl border border-primary/30 animate-fade-in animation-delay-300">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name..."
              className="w-full px-4 py-3 bg-surface rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-surface rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Enter message..."
              className="w-full px-4 py-3 bg-surface rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? <>Sending...</> : <>Send Message<Send /></>}
          </Button>
          {submitStatus.type && (
            <div className={`flex items-center gap-3 p-3 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}>
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>*/}

      {/* Contact Info */}
      <div className="space-y-6 animate-fade-in animation-delay-400">
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-5">Contact Information</h3>
          <div className="space-y-3">
            {info.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-6 border border-primary/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium text-sm">Currently Available</span>
          </div>
          <p className="text-muted-foreground text-xs">
            I'm open to new opportunities and exciting projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>   
}
