"use client";

import React, { useState } from "react";

export default function AboutPage() {
    const committeeImages = [
        { src: "./oph1.jpeg", alt: "Open House DTETI" },
        { src: "./light.jpeg", alt: "Lightman - ENFORIAN" },
    ];

    const trainingImages = [
        { src: "./improc.png", alt: "Certificate Image Processing" },
        { src: "./AI bootcamp.png", alt: "Certificate AI" },
        { src: "./UX Sertif.png", alt: "Certificate UX Staff" },
        { src: "./Webdev II.png", alt: "Certificate WebDev" },
    ];

    const [committeeIndex, setCommitteeIndex] = useState(0);
    const [trainingIndex, setTrainingIndex] = useState(0);

    const nextCommittee = () =>
        setCommitteeIndex((prev) => (prev + 1) % committeeImages.length);
    const prevCommittee = () =>
        setCommitteeIndex((prev) =>
            prev === 0 ? committeeImages.length - 1 : prev - 1
        );

    const nextTraining = () =>
        setTrainingIndex((prev) => (prev + 1) % trainingImages.length);
    const prevTraining = () =>
        setTrainingIndex((prev) =>
            prev === 0 ? trainingImages.length - 1 : prev - 1
        );

    return (
        <section
            id="about"
            className="container mx-auto px-6 lg:px-24 pt-10 pb-16 lg:pt-24 lg:pb-32"
        >
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b-4 border-[#4D45E4] inline-block pb-1">
                    About Me
                </h2>

                <div className="text-gray-300 space-y-6 text-lg">
                    <p>
                        I'm an Information Engineering student at Universitas
                        Gadjah Mada, currently in my 3rd semester, passionate in
                        exploring new things around technology. Through my
                        journey in tech and design, I eager to keep learning,
                        growing, and creating things that make a difference.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-19" data-aos="fade-up">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 text-gray-300 space-y-6 text-lg">
                        <p data-aos="fade-up" data-aos-offset="150" data-aos-delay="200">
                            At university, I’ve joined several committees, such
                            as being a Public Relations staff for Open House
                            DTETI 2024, a Lightingman staff in the ENFORIAN
                            event, and a Technical staff for the UX Competition
                            at FindIT! 2025. These experiences helped me gain
                            valuable insights and build meaningful connections
                            with others.
                        </p>
                        <p data-aos="fade-up" data-aos-offset="150" data-aos-delay="400">
                            I’ve also participated in several trainings and
                            bootcamps to strengthen my skills and gain more
                            hands-on experience, including website development,
                            image processing, and artificial intelligence.
                        </p>
                        <p data-aos="fade-up" data-aos-offset="150" data-aos-delay="600">
                            Through these opportunities, I’ve developed not only
                            my technical abilities but also teamwork,
                            adaptability, and communication skills — things I
                            truly value as I continue exploring my path in tech
                            and design.
                        </p>

                        <div data-aos="fade-up" data-aos-offset="150" data-aos-delay="800">
                            <div className="pt-4">
                                <h3 className="text-1xl mb-4 font-semibold text-white">
                                    Technologies I've worked with
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "React",
                                        "Next.js",
                                        "Tailwind CSS",
                                        "JavaScript (ES6+)",
                                        "Node.js",
                                        "Figma",
                                        "Python",
                                        "C++",
                                        "TensorFlow",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-1 bg-gray-700 text-[#4D45E4] rounded-full text-sm font-medium border border-[#4D45E4]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom kanan: dua kategori gambar */}
                    <div className="lg:col-span-1 space-y-10">
                        {/* Kategori 1 */}
                        <div
                            className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg"
                            data-aos="zoom-in"
                            data-aos-offset="200"
                        >
                            <img
                                src={committeeImages[committeeIndex].src}
                                alt={committeeImages[committeeIndex].alt}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={prevCommittee}
                                className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full hover:bg-[#4D45E4] transition"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextCommittee}
                                className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full hover:bg-[#4D45E4] transition"
                            >
                                ›
                            </button>
                        </div>

                        {/* Kategori 2 */}
                        <div
                            className="relative w-full h-56 rounded-xl overflow-hidden shadow-lg"
                            data-aos="zoom-in"
                            data-aos-offset="250"
                            data-aos-delay="300"
                        >
                            <img
                                src={trainingImages[trainingIndex].src}
                                alt={trainingImages[trainingIndex].alt}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={prevTraining}
                                className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full hover:bg-[#4D45E4] transition"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextTraining}
                                className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800/70 p-2 rounded-full hover:bg-[#4D45E4] transition"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
