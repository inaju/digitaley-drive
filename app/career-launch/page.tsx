'use client'
import React from 'react'
import { stagger, useAnimate } from "framer-motion";
// import {
//   // Availability,
//   // Colors,
//   // Music,
//   // SchedulingLinks,
//   // Team,
//   // Todo,
//   ScrollCard
// } from '../components/features/card';
import { careerPaths } from '../data';
import { FeatureTitle } from '../components/features/title';
// import { AnalyticsEngineering, Backend, BusinessAnalysis, DataAnalytics, DataEngineering, DataScience, Frontend, GameDevelopment, MusicVisual, OtherVisual, UiDesign } from "../components/features/visual";
import { useFeatureStore } from "../components/features/store";
import { useEffect } from "react";
import { useHidePageOverflow } from "../utils/toggle-page-overflow";
import { useEscapePress } from "../utils/use-escape-press";
// const features = [
//   {
//     title: "Use your calendar as a todo list",
//     id: "todo-list",
//     card: ScrollCard,
//     visual: OtherVisual,
//   },
//   {
//     title: "Color your calendar to organize",
//     id: "colors",
//     card: ScrollCard,
//     visual: OtherVisual,
//   },
//   {
//     title: "Instantly know if someone is available",
//     id: "availability",
//     card: ScrollCard,
//     visual: OtherVisual,
//   },
//   {
//     title: "Track what you listened to when",
//     id: "music",
//     card: ScrollCard,
//     visual: MusicVisual,
//   },
//   {
//     title: "Send scheduling links guests love",
//     id: "scheduling-links",
//     card: ScrollCard,
//     visual: OtherVisual,
//   },
//   {
//     title: "Always know what your team is up to",
//     id: "team",
//     card: ScrollCard,
//     visual: OtherVisual,
//   },
// ];


// const courses = [
//   {
//     title: "Data Analytics",
//     id: "data-analyst",
//     description: 'Data Analytics involves the collecting, transforming and organization of data so as to make informed decisions and predictions. In simple terms, data analytics is sitting people round a table, and telling them fairy stories about something you discovered. Yes, that is Data Analytics!  <br />  So the discovery is the trend and pattern you discovered inside a data  <br />  The round table is your stakeholders   <br /> The means by which you tell them what you discovered is dashboard and visuals <br /> And How do you make your dashboards? you clean, transform and analyze the data. ',
//     sections: [
//       {
//         title: 'You are wondering what skills do I need? You need the following ',
//         notes: [
//           'Structured Query Language (SQL) which is a database tool used to access data stored in a database',
//           'Data Visualization tools such as Microsoft Excel, Tableau or Power BI to create charts and graphs that tell a story . ',
//           'A programming tool like Python or R (though this is not compulsory, but you can learn it to stand out!)'
//         ]
//       },
//       {
//         title: 'You are wondering if this is for you….. Well,',
//         notes: [
//           'If you like to solve problems',
//           'If you like telling stories from a hidden discovery',
//           'If you like presentations'
//         ]
//       },
//     ],
//     closingTag: 'Then this is the right path for you.'
//   },
//   {
//     title: "",
//     id: "",
//     description: '',
//     sections: [
//       {
//         title: '',
//         notes: [
//           '',
//           '',
//           ''
//         ]
//       },
//       {
//         title: '',
//         notes: [
//           '',
//           '',
//           ''
//         ]
//       },
//     ],
//     closingTag: ''
//   },
//   {
//     title: "",
//     id: "",
//     description: '',
//     sections: [
//       {
//         title: '',
//         notes: [
//           '',
//           '',
//           ''
//         ]
//       },
//       {
//         title: '',
//         notes: [
//           '',
//           '',
//           ''
//         ]
//       },
//     ],
//     closingTag: ''
//   },
// ];




// console.log(careerPaths);

const page = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);
  return (
    <div className="mx-auto pt-24 lg:pt-40 max-w-[92.5rem] px-[1rem] lg:px-0 lato">
      <h1 className='text-[2.5rem] lg:text-[6rem] text-greenPrimary'>Career  Launch</h1>
      <div ref={scope}>
        {careerPaths.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex flex-col-reverse lg:flex-row w-full items-start gap-16 lg:gap-20">
          <div className="w-full py-[4rem] lg:py-[50vh]">
            <ul>
              {/* {careerPaths.map((path, index) => (
                <li key={path.id}>
                  <FeatureTitle id={path.id}>
                    <div key={index} className="career-path border border-black">
                      <h2 className='text-greenPrimary'>{path.title}</h2>
                      <p>{path.description}</p>
                      {path.details && (
                        <div>
                          <h3>Details:</h3>
                          <ul>
                            {path.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {path.skills && (
                        <div>
                          <h3>Skills Needed:</h3>
                          <ul>
                            {path.skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {path.tools && (
                        <div>
                          <h3>Tools:</h3>
                          <ul>
                            {path.tools.map((tool, i) => (
                              <li key={i}>{tool}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {path.parts && (
                        <div>
                          <h3>Parts:</h3>
                          <ul>
                            {path.parts.map((part, i) => (
                              <li key={i}>{part}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {path.fit && (
                        <div>
                          <h3>Is this career for you?</h3>
                          <ul>
                            {path.fit.map((fit, i) => (
                              <li key={i}>{fit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </FeatureTitle>
                </li>
              ))} */}


              {careerPaths.map((path, index) => (
                <li key={path.id}>
                  <FeatureTitle id={path.id} item={path} index={index} />
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky mt-[1.5rem] b top-0 flex h-[20rem] lg:h-screen w-full lg:items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              {careerPaths.map((feature) => (
                <feature.card id={feature.id} key={feature.id} img={feature.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">More room to scroll</div>





      <div>
        {careerPaths.map((path, index) => (
          <div key={index} className="career-path">
            <h2>{path.title}</h2>
            <p>{path.description}</p>
            {path.details && (
              <div>
                <h3>Details:</h3>
                <ul>
                  {path.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {path.skills && (
              <div>
                <h3>Skills Needed:</h3>
                <ul>
                  {path.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
            {path.tools && (
              <div>
                <h3>Tools:</h3>
                <ul>
                  {path.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}
            {path.parts && (
              <div>
                <h3>Parts:</h3>
                <ul>
                  {path.parts.map((part, i) => (
                    <li key={i}>{part}</li>
                  ))}
                </ul>
              </div>
            )}
            {path.fit && (
              <div>
                <h3>Is this career for you?</h3>
                <ul>
                  {path.fit.map((fit, i) => (
                    <li key={i}>{fit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default page