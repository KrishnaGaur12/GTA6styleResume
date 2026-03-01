import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Parallax effect for the resume sections
        const sections = gsap.utils.toArray('.resume-section');

        sections.forEach((section) => {
            gsap.fromTo(section,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="resume-container w-full min-h-screen bg-black text-white px-8 py-20 font-['Helvetica_Now_Display'] overflow-hidden relative">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ea00ff, transparent 50%)', filter: 'blur(100px)' }}></div>
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/stardust.png)' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header - WANTED */}
                <div className="resume-section mb-20 transform -rotate-2">
                    <div className="bg-yellow-400 text-black border-8 border-black p-8 shadow-[10px_10px_0px_0px_rgba(255,0,255,1)]">
                        <h1 className="font-['pricedown'] text-8xl text-center mb-4 tracking-wider uppercase text-red-600 drop-shadow-[2px_2px_0_#000]">Wanted</h1>
                        <h2 className="text-5xl font-black text-center mb-6 uppercase tracking-tighter">Krishna Gaur</h2>
                        <div className="flex flex-wrap justify-center gap-6 text-xl font-bold border-t-4 border-black pt-6">
                            <span className="bg-black text-white px-4 py-2 hover:-translate-y-1 transition-transform">krishnagaur0033@gmail.com</span>
                            <span className="bg-black text-white px-4 py-2 hover:-translate-y-1 transition-transform">+91-9625398852</span>
                            <a href="https://linkedin.com/in/gaurkrishna" className="bg-[#0077b5] text-white px-4 py-2 hover:-translate-y-1 transition-transform border-2 border-transparent">LinkedIn</a>
                            <a href="https://github.com/KrishnaGaur12" className="bg-[#333] text-white px-4 py-2 hover:-translate-y-1 transition-transform border-2 border-transparent">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column */}
                    <div className="flex-1 space-y-12">

                        {/* Education - SAFE HOUSE */}
                        <div className="resume-section bg-zinc-900 border-4 border-[#00ffff] p-6 shadow-[-8px_8px_0px_0px_rgba(0,255,255,0.7)] transform rotate-1">
                            <h3 className="font-['pricedown'] text-5xl text-[#00ffff] mb-6 tracking-wide drop-shadow-[2px_2px_0_#000]">Safe House (Education)</h3>
                            <div className="bg-black/50 p-4 border-l-4 border-yellow-400">
                                <h4 className="text-2xl font-bold uppercase">ABES Engineering College</h4>
                                <p className="text-xl text-yellow-400 font-bold mb-2">B.Tech Computer Science | CGPA: 7.7</p>
                                <p className="text-gray-400 uppercase text-sm font-bold">Class of 2027 • Ghaziabad, India</p>
                                <p className="mt-4 text-sm leading-relaxed border-t border-zinc-800 pt-4">Data Structures & Algorithms • Operating Systems • Computer Networks • DBMS • OOPS • System Design</p>
                            </div>
                        </div>

                        {/* Skills - PLAYER STATS */}
                        <div className="resume-section bg-zinc-900 border-4 border-[#ff00ff] p-6 shadow-[8px_8px_0px_0px_rgba(255,0,255,0.7)] transform -rotate-1">
                            <h3 className="font-['pricedown'] text-5xl text-[#ff00ff] mb-6 tracking-wide drop-shadow-[2px_2px_0_#000]">Player Stats (Skills)</h3>
                            <div className="space-y-6">
                                {[
                                    { title: "Weapons (Languages)", skills: "Python, C++, JS, Java, SQL", color: "bg-[#00ffff]" },
                                    { title: "Arsenal (Frameworks)", skills: "Spring Boot, React, Express, Node", color: "bg-yellow-400" },
                                    { title: "Stash (Databases)", skills: "MongoDB, MySQL, PostgreSQL", color: "bg-[#ff00ff]" },
                                    { title: "Gadgets (Tools)", skills: "Docker, Git, Linux, Postman, CI/CD", color: "bg-green-400" },
                                    { title: "Special Ops (AI/ML)", skills: "OpenCV, OCR, NumPy, BERT", color: "bg-red-500" },
                                ].map((stat, i) => (
                                    <div key={i} className="group cursor-default">
                                        <h4 className="text-sm uppercase font-bold text-gray-400 mb-1 group-hover:text-white transition-colors">{stat.title}</h4>
                                        <div className="flex">
                                            <span className={`${stat.color} text-black font-black uppercase px-3 py-1 text-sm whitespace-nowrap`}>Equipped</span>
                                            <span className="bg-black border-2 border-zinc-800 border-l-0 px-4 py-1 text-sm font-bold flex-1 group-hover:border-zinc-500 transition-colors truncate">{stat.skills}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Experience - MISSIONS */}
                        <div className="resume-section bg-zinc-900 border-4 border-green-500 p-6 shadow-[-8px_-8px_0px_0px_rgba(34,197,94,0.7)] transform rotate-2">
                            <h3 className="font-['pricedown'] text-5xl text-green-500 mb-6 tracking-wide drop-shadow-[2px_2px_0_#000]">Missions (Experience)</h3>
                            <div className="relative pl-6 border-l-4 border-zinc-800 space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                                    <h4 className="text-2xl font-black uppercase text-white">Core Member</h4>
                                    <p className="text-green-400 font-bold mb-2">Enigma Programming Club • Aug '24 - Present</p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4 marker:text-green-500">
                                        <li className="pl-2">Organized competitive programming workshops & contests</li>
                                        <li className="pl-2">Mentored peers on DSA concepts via LeetCode & Codeforces</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="flex-1 space-y-12">

                        {/* Projects - HEISTS */}
                        <div className="resume-section bg-zinc-900 border-4 border-yellow-400 p-6 shadow-[8px_-8px_0px_0px_rgba(250,204,21,0.7)] transform -rotate-1">
                            <h3 className="font-['pricedown'] text-5xl text-yellow-400 mb-6 tracking-wide drop-shadow-[2px_2px_0_#000]">Heists (Projects)</h3>

                            <div className="space-y-8">
                                {/* Project 1 */}
                                <div className="bg-black/80 p-5 border border-zinc-800 hover:border-yellow-400 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">ByteCrush</h4>
                                        <span className="bg-zinc-800 text-xs text-white px-2 py-1 font-bold uppercase">C++ / STL</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold mb-4 uppercase">File Compression Toolkit</p>
                                    <ul className="list-none text-gray-300 space-y-2 text-sm">
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Multi-threaded compressor using Huffman, LZW, RLE</li>
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Reduced file sizes by 50-60% on multi-GB text files</li>
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Achieved 2.5x throughput improvement vs single-threaded</li>
                                    </ul>
                                </div>

                                {/* Project 2 */}
                                <div className="bg-black/80 p-5 border border-zinc-800 hover:border-yellow-400 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">AlgoVerse</h4>
                                        <span className="bg-zinc-800 text-xs text-white px-2 py-1 font-bold uppercase">React / Node</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold mb-4 uppercase">Advanced DSA Platform</p>
                                    <ul className="list-none text-gray-300 space-y-2 text-sm">
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Explanations for advanced DSA topics (DP, Graphs)</li>
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> 50+ curated competitive programming problem solutions</li>
                                    </ul>
                                </div>

                                {/* Project 3 */}
                                <div className="bg-black/80 p-5 border border-zinc-800 hover:border-yellow-400 transition-colors group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-2xl font-black text-white group-hover:text-yellow-400 transition-colors">ChargeShare</h4>
                                        <span className="bg-zinc-800 text-xs text-white px-2 py-1 font-bold uppercase">MERN / Maps API</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold mb-4 uppercase">P2P EV Charging Platform</p>
                                    <ul className="list-none text-gray-300 space-y-2 text-sm">
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Marketplace for EV owners to list/find/book private chargers</li>
                                        <li className="flex gap-2"><span className="text-yellow-400">▹</span> Real-time geolocation search, optimized map queries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Achievements - TROPHIES */}
                        <div className="resume-section bg-zinc-900 border-4 border-red-500 p-6 shadow-[8px_8px_0px_0px_rgba(239,68,68,0.7)] transform rotate-1">
                            <h3 className="font-['pricedown'] text-5xl text-red-500 mb-6 tracking-wide drop-shadow-[2px_2px_0_#000]">Trophies (Awards)</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { title: "Tata Imagination Challenge", desc: "Top 2.27% • National Semi-Finalist" },
                                    { title: "CodeChef", desc: "1616 Rating • Global Rank 74 (Starters 211)" },
                                    { title: "LeetCode", desc: "1519 Rating • 450+ DSA problems solved" },
                                    { title: "Google Cloud Arcade", desc: "Achieved Legend status" },
                                    { title: "Ardethon Hackathon", desc: "3rd place AI solution among 100+ teams" },
                                ].map((award, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-black p-3 border border-zinc-800 group hover:border-red-500 transition-colors">
                                        <div className="w-12 h-12 bg-zinc-900 border-2 border-red-500 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                                            <i className="ri-trophy-fill text-2xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="font-black uppercase text-white">{award.title}</h4>
                                            <p className="text-sm text-gray-400 uppercase font-bold">{award.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
