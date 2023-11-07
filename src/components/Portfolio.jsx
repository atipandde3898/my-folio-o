import React from "react";
import pomodoro from "../assets/portfolio/pomodoro.png";
import githunt from "../assets/portfolio/githunt.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://crypto-info-api.cyclic.app/',
      repo: 'https://github.com/atipandde3898/my-folio-o'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://mtechzilla-assesss.vercel.app/',
      repo: 'https://github.com/atipandde3898/mtechzilla-assesss'
    },
    {
      id: 3,
      src: apod,
      link: 'https://mtechzilla-assesss-57kd.vercel.app/',
      repo: 'https://github.com/atipandde3898/mtechzilla-assesment'
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                 Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  Git Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
