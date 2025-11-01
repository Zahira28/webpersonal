"use client";

import React, { useEffect, useState } from "react";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  index,
  notebookUrl,
  projectUrl,
}) => {
  const isOdd = index % 2 !== 0;

  const thumbnailTransitionClass = isOdd
    ? "group-hover:-translate-x-full"
    : "group-hover:translate-x-full";

  const descriptionPositionClass = isOdd ? "right-0" : "left-0";

  const imagePath =
    typeof image === "object" && image?.url
      ? image.url
      : image || "/placeholder.jpg";

  return (
    <div
      className="group relative h-72 md:h-96 w-full bg-gray-700 rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={100 * index}
    >
      <div
        className={`absolute inset-y-0 ${descriptionPositionClass} w-full p-6 bg-[#2d333b] transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-20 flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-2xl font-bold text-[#4D45E4] mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-4">{description}</p>

          {notebookUrl && (
            <a
              href={notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-[#4D45E4] transition flex items-center mb-2 mt-2"
            >
              View Notebook
            </a>
          )}

          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-0.5 bg-gray-600 text-xs rounded-full"
              >
                {tag.name || tag}
              </span>
            ))}
          </div>
        </div>

        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white hover:text-[#4D45E4] transition flex items-center"
          >
            View Project
            <svg
              className="w-4 h-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      <img
        src={imagePath}
        alt={`${title} Thumbnail`}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${thumbnailTransitionClass} group-hover:opacity-10 z-10`}
      />

      <div className="absolute inset-0 flex items-end p-6 bg-black/40 group-hover:opacity-0 transition duration-500">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/projects?depth=2`);
        const data = await res.json();
        setProjects(data?.docs || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="container mx-auto px-6 lg:px-24 pt-10 pb-16 lg:pt-24 lg:pb-32">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 border-b-4 border-[#4D45E4] inline-block pb-1"
          data-aos="fade-down"
        >
          My Projects
        </h2>

        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh] text-gray-400 text-lg animate-pulse">
            Loading projects...
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.id || index} {...project} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center mt-10">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
}
