import cvPdf from '../public/cv/syed_atif_ali.pdf?url';
import '@/index.css'; 
import {Button} from '@/components/Button'
import {  ChevronDown, Download, DownloadIcon, Send } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedButton';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { useRef, useEffect } from "react";
const skills=[
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "Github",
    "AWS",
]

function useTilt3D() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = null;
    let mouseX = 0, mouseY = 0;
    let width = 0, height = 0, left = 0, top = 0;
    const maxTilt = 12; // degrees
    const scale = 1.03;

    function updateBounds() {
      const rect = el.getBoundingClientRect();
      width = rect.width; height = rect.height;
      left = rect.left; top = rect.top;
    }

    function onMove(e) {
      mouseX = (e.clientX - left) / width;
      mouseY = (e.clientY - top) / height;
      if (!frame) frame = requestAnimationFrame(animate);
    }

    function onLeave() {
      if (frame) cancelAnimationFrame(frame);
      frame = null;
      el.style.transition = "transform 450ms cubic-bezier(.2,.8,.2,1)";
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    }

    function animate() {
      frame = null;
      // center-based coords (-0.5 .. 0.5)
      const cx = mouseX - 0.5;
      const cy = mouseY - 0.5;
      const rotateY = cx * maxTilt * -1; // invert for natural movement
      const rotateX = cy * maxTilt;
      el.style.transition = "transform 120ms ease-out";
      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`;
    }

    updateBounds();
    window.addEventListener("resize", updateBounds);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", updateBounds);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("resize", updateBounds);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", updateBounds);
      el.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return ref;
}

export const Hero=()=>{
    const tiltRef = useTilt3D();

    return     <section className="relative min-h-screen bg-gradient-to-b from-[#071029] via-[#081726] to-[#041018] overflow-hidden">
            {/* Decorative blurred blobs (subtle, large shapes) */}
            <div className="absolute -left-32 -top-40 w-[680px] h-[680px] rounded-full bg-[#0ea5a4]/10 filter blur-3xl pointer-events-none" />
            <div className="absolute -right-40 top-20 w-[520px] h-[520px] rounded-full bg-[#7c3aed]/8 filter blur-3xl pointer-events-none" />
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            {[...Array(50)].map((_,i)=>(
                <div key={i} className='absolute w-1.25 h-1.25 rounded-full opacity-80' style={{backgroundColor:"#3bc1ff",
                        left:`${Math.random() * 100}%`,
                        top:`${Math.random() * 100}%`,
                        animation:`slow-drift ${15+Math.random()*20}s ease-in-out infinite`,
                        animationDelay:`${Math.random()*5}s`
                       }}
                />
            ))}
        </div>
            <div className="container mx-auto px-6 py-24 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left: editorial, strong typography */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-white/5 text-xs uppercase tracking-wide text-primary font-semibold">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor:"red"}}/>Software Engineer — FullStack Developer
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                    I design and build <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">digital products</span>
                    <br />
                    that scale and delight.
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-prose">
                    I'm a passionate developer eager to build digital products that make a difference. Strong foundation in JavaScript.Quick learner committed to continuous improvement. Let's create something great together. Available for freelance ,part-time or full-time roles.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                    <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Work with me
                    </Button>

                    <a href={cvPdf} download="syed_atif_ali.pdf">
                        <AnimatedBorderButton className="text-sm"><DownloadIcon/>Download CV</AnimatedBorderButton>
                    </a>
                    </div>

                    <div className="flex items-center gap-6 mt-6">
                    {[{ icon: FaGithub, href: "https://Github.com/Atif-1" }, { icon: SiLeetcode, href: "https://leetcode.com/Atif-111" }].map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white/3 hover:scale-105 hover:bg-primary/30 transform transition">
                        {<s.icon className="w-5 h-5 text-white/90 " />}
                        </a>
                    ))}
                    <div className="text-sm text-muted-foreground">Open to all locations | Prefer Remote</div>
                    </div>
                </div>

                {/* Right: interactive 3D stacked card */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md perspective-1000">
                    {/* Back glow card */}
                    <div className="absolute inset-0 transform rotate-6 translate-x-6 translate-y-6 bg-gradient-to-br from-[#0ea5a4]/6 to-[#7c3aed]/6 rounded-3xl blur-xl" />

                    {/* Stacked cards */}
                    <div className="relative w-full max-w-md perspective-1000 glow-border">
                        <div ref={tiltRef} className="relative">
                            <div className="relative">
                                {/* Card 1 (top) - main profile card */}
                                <div
                                className="relative bg-gradient-to-br from-surface/70 to-surface/50 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:-translate-y-3"
                                >
                                <div className="p-6">
                                    <div className="flex items-center gap-4">
                                    <img src="/photo.jpg" alt="profile" className="w-24 h-24 rounded-lg object-cover border-2 border-white/6" />
                                    <div>
                                        <div className="text-lg font-bold text-white">Syed Atif Ali</div>
                                        <div className="text-sm text-muted-foreground">Software Developer</div>
                                        <div className="mt-2 flex gap-2">
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">React</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">Node</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">MySQL</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">AWS</span>
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">HTML</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">CSS</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">Javascript</span>
                                        <span className="text-xs px-2 py-1 rounded bg-white/6">Java</span>
                                        </div>
                                    </div>
                                    </div>

                                    <p className="mt-4 text-sm text-muted-foreground">
                                    Build production-ready features / apps with performance , maintainability and also deployed them.
                                    </p>

                                    <div className="mt-6 flex gap-3">
                                    <a href='#about'>
                                        <Button size="sm" className="z-30" >About me</Button>
                                    </a>
                                    </div>
                                </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                    {/* subtle tilt interaction: small JS listener (optional) */}
                    <style>{`
                        .perspective-1000 { perspective: 1000px; }
                        .perspective-1000 > .relative { transform-style: preserve-3d; }
                    `}</style>
                    </div>
                </div>
                </div>
            </div>

            {/* Curved SVG separator into next section */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1428 174" fill="none" className="w-full">
                <path d="M0 0C72 68 252 122 512 122C772 122 950 24 1224 24C1400 24 1428 0 1428 0V174H0V0Z" fill="rgba(255,255,255,0.03)"/>
                </svg>
            </div>
                </section>

}
