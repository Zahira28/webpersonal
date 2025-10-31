"use client"
import React from 'react';

const SocialIcon = ({ href, children, name }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-[#4D45E4] transition-colors duration-300 flex items-center space-x-3"
    >
        <div className="w-6 h-6">{children}</div>
        <span className="text-base font-medium">{name}</span>
    </a>
);

const ContactPage = () => {

    return (
        <section id="contact" className="container mx-auto px-6 lg:px-24 pt-10 pb-16 lg:pt-24 lg:pb-32">
            <div className="max-w-4xl mx-auto"> 
                <h2 
                    className="text-4xl md:text-5xl font-bold mb-12 border-b-4 border-[#4D45E4] inline-block pb-1 text-white text-center w-full md:w-auto" 
                    data-aos="fade-down"
                >
                    ✉️ Get in Touch
                </h2>
            
                <div className="grid grid-cols-1">
                    <div 
                        className="p-8 md:p-12 rounded-xl shadow-2xl bg-[#1e2630] flex flex-col justify-center mx-auto w-full max-w-lg"
                        data-aos="fade-up" 
                        data-aos-delay="200"
                    >
                        <p className="mb-12 text-lg text-white max-w-2xl border-b border-gray-700 pb-3 text-center">
                            You can connect with me directly through these channels.
                        </p>

                        <div className="space-y-6">
                            <SocialIcon href="https://www.linkedin.com/in/zahira-anindya-putri" name="LinkedIn">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.81 0 0 .77 0 1.73v20.54C0 23.23.81 24 1.77 24h20.46c.96 0 1.77-.77 1.77-1.73V1.73C24 .77 23.19 0 22.23 0zM7.27 20.91H3.61V8.4h3.66v12.51zM5.44 6.84a1.92 1.92 0 0 1-1.92-1.93c0-1.07.85-1.93 1.92-1.93s1.92.86 1.92 1.93c0 1.07-.85 1.93-1.92 1.93zM20.39 20.91h-3.66v-6.07c0-1.45-.55-2.45-1.83-2.45-1.01 0-1.61.68-1.87 1.34-.1.22-.12.51-.12.81v6.37h-3.66s.05-11.3 0-12.51h3.66v1.57c.5-.78 1.4-1.89 3.32-1.89 2.43 0 4.25 1.58 4.25 4.96v7.87z"/></svg>
                            </SocialIcon>

                            <SocialIcon href="https://github.com/Zahira28" name="GitHub">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.43 9.8 8.21 11.38.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2.02-3.32.72-4.03-1.6-4.03-1.6-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.92 0-1.3.46-2.35 1.23-3.18-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.29 1.22A11.5 11.5 0 0 1 12 5.56c1.02.27 2.08.4 3.14.39 2.29-1.54 3.29-1.22 3.29-1.22.65 1.63.24 2.83.12 3.13.77.83 1.23 1.88 1.23 3.18 0 4.6-2.8 5.62-5.47 5.92.42.36.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" clipRule="evenodd"/></svg>
                            </SocialIcon>

                            <SocialIcon href="https://www.instagram.com/zahiraanindya_?igsh=ZnNoMHV2dThyZjdk" name="Instagram">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.275.148 4.772 1.626 4.92 4.75.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.585-.07 4.85-0.148 3.275-1.626 4.772-4.75 4.92-1.265.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.276-0.148-4.773-1.626-4.92-4.75-0.058-1.265-0.07-1.645-0.07-4.85 0-3.204.012-3.584.07-4.85 0.148-3.276 1.626-4.773 4.75-4.92 1.265-0.058 1.645-0.07 4.85-0.07zm0-2.163c-3.259 0-3.666.014-4.94.073-4.453.202-6.52 2.27-6.721 6.721-0.059 1.274-0.073 1.681-0.073 4.94s0.014 3.666 0.073 4.94c0.202 4.45 2.27 6.52 6.721 6.721 1.274 0.059 1.681 0.073 4.94 0.073 3.259 0 3.666-0.014 4.94-0.073 4.45-0.202 6.52-2.27 6.721-6.721 0.059-1.274 0.073-1.681 0.073-4.94s-0.014-3.666-0.073-4.94c-0.202-4.453-2.27-6.52-6.721-6.721-1.274-0.059-1.681-0.073-4.94-0.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.54-10.435a1.442 1.442 0 1 0 0-2.884 1.442 1.442 0 0 0 0 2.884z"/></svg>
                            </SocialIcon>

                            <SocialIcon name="zahira.anindya.putri@gmail.com">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactPage;