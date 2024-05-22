// // import classNames from "classnames";
// // import { useInView } from "framer-motion";
// // import React, { useEffect, useRef } from "react";
// // import { useFeatureStore } from "./store";

// // type Props = {
// //   children: React.ReactNode;
// //   id: string;
// //   item: string;
// // };

// // export const FeatureTitle = ({ children, id, item }: Props) => {
// //   const ref = useRef<HTMLParagraphElement>(null);
// //   const documentRef = useRef(document);
// //   const isInView = useInView(ref, {
// //     margin: "-50% 0px -50% 0px",
// //     // NOTE: The only reason we pass in the document here, is because
// //     // of security restrictions set by the browser when using an iFrame.
// //     // In an iFrame (so eg in the preview on frontend.fyi),
// //     // margin won't take effect unless you specify the root manually.
// //     // By default it will be the window element, which is what we want in this case.
// //     // If you specify your own root, you can usually only pass in an Element, and
// //     // not the document (since document/window is the default). However, in order
// //     // to fix the issue in the iframe, we need to pass in the document here and thus
// //     // tell TypeScript that we know what we're doing. If you're implementing
// //     // this in your own website, you can just pass in the root property as well as the documentRef.
// //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// //     // @ts-ignore
// //     root: documentRef,
// //   });
// //   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
// //   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

// //   useEffect(() => {
// //     if (isInView) setInViewFeature(id);
// //     if (!isInView && inViewFeature === id) setInViewFeature(null);
// //   }, [isInView, id, setInViewFeature, inViewFeature]);

// //   return (
// //     <p
// //       ref={ref}
// //       className={classNames(
// //         "feature-title py-16 font-heading text-5xl transition-colors",
// //         isInView ? "text-black" : "text-gray-300"
// //       )}
// //     >
// //       {children}
// //     </p>
// //   );
// // };


















// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// type Props = {
//   id: string;
//   item: any;
//   index: number;
// };

// export const FeatureTitle = ({ id, item, index }: Props) => {
//   const ref = useRef<HTMLParagraphElement>(null);
//   const documentRef = useRef(document);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//     // NOTE: The only reason we pass in the document here, is because
//     // of security restrictions set by the browser when using an iFrame.
//     // In an iFrame (so eg in the preview on frontend.fyi),
//     // margin won't take effect unless you specify the root manually.
//     // By default it will be the window element, which is what we want in this case.
//     // If you specify your own root, you can usually only pass in an Element, and
//     // not the document (since document/window is the default). However, in order
//     // to fix the issue in the iframe, we need to pass in the document here and thus
//     // tell TypeScript that we know what we're doing. If you're implementing
//     // this in your own website, you can just pass in the root property as well as the documentRef.
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     root: documentRef,
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

//   return (
//     <div
//       ref={ref}
//       className={classNames(
//         "feature-title pb-32 lg:py-24 font-heading text-5xl transition-colors",

//       )}
//       key={index}
//     >
//       {/* {children} */}
//       <div className="career-item">
//         <h1 className={`${isInView ? "text-greenPrimary" : "text-gray-300"} text-3xl`}>{item.title}</h1>
//         <p className={`${isInView ? "text-gray-600" : "text-gray-300"} text-xl mt-4`}>{item.description}</p>
//         {item.details && (
//           <div>
//             <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl mt-8`}>Details:</h3>
//             <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
//               {item.details.map((detail: string, i: number) => (
//                 <div key={i} className="flex items-center gap-6 ">
//                   <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
//                   <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{detail}</li>
//                 </div>
//               ))}
//             </ul>
//           </div>
//         )}
//         {item.skills && (
//           <div className="mt-8">
//             <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Skills Needed:</h3>
//             <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
//               {item.skills.map((skill: string, i: number) => (
//                 <div key={i} className="flex items-center gap-6 ">
//                 <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
//                 <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{skill}</li>
//               </div>
//               ))}
//             </ul>
//           </div>
//         )}
//         {item.tools && (
//           <div className="mt-8">
//             <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Tools:</h3>
//             <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
//               {item.tools.map((tool: string, i: number) => (
//                 <div key={i} className="flex items-center gap-6 ">
//                 <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
//                 <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{tool}</li>
//               </div>
//               ))}
//             </ul>
//           </div>
//         )}
//         {item.parts && (
//           <div className="mt-8">
//             <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Parts:</h3>
//             <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
//               {item.parts.map((part: string, i: number) => (
//                 <div key={i} className="flex items-center gap-6 ">
//                 <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
//                 <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{part}</li>
//               </div>
//               ))}
//             </ul>
//           </div>
//         )}
//         {item.fit && (
//           <div className="mt-8">
//             <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Is this career for you?</h3>
//             <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
//               {item.fit.map((fit: string, i: number) => (
//                 <div key={i} className="flex items-center gap-6 ">
//                 <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
//                 <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{fit}</li>
//               </div>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };













































// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// type Props = {
//   children: React.ReactNode;
//   id: string;
//   item: string;
// };

// export const FeatureTitle = ({ children, id, item }: Props) => {
//   const ref = useRef<HTMLParagraphElement>(null);
//   const documentRef = useRef(document);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//     // NOTE: The only reason we pass in the document here, is because
//     // of security restrictions set by the browser when using an iFrame.
//     // In an iFrame (so eg in the preview on frontend.fyi),
//     // margin won't take effect unless you specify the root manually.
//     // By default it will be the window element, which is what we want in this case.
//     // If you specify your own root, you can usually only pass in an Element, and
//     // not the document (since document/window is the default). However, in order
//     // to fix the issue in the iframe, we need to pass in the document here and thus
//     // tell TypeScript that we know what we're doing. If you're implementing
//     // this in your own website, you can just pass in the root property as well as the documentRef.
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     root: documentRef,
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

//   return (
//     <p
//       ref={ref}
//       className={classNames(
//         "feature-title py-16 font-heading text-5xl transition-colors",
//         isInView ? "text-black" : "text-gray-300"
//       )}
//     >
//       {children}
//     </p>
//   );
// };


















import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

type Props = {
  id: string;
  item: any;
  index: number;
};

export const FeatureTitle = ({ id, item, index }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    // NOTE: The only reason we pass in the document here, is because
    // of security restrictions set by the browser when using an iFrame.
    // In an iFrame (so eg in the preview on frontend.fyi),
    // margin won't take effect unless you specify the root manually.
    // By default it will be the window element, which is what we want in this case.
    // If you specify your own root, you can usually only pass in an Element, and
    // not the document (since document/window is the default). However, in order
    // to fix the issue in the iframe, we need to pass in the document here and thus
    // tell TypeScript that we know what we're doing. If you're implementing
    // this in your own website, you can just pass in the root property as well as the documentRef.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    root: documentRef,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <div
      ref={ref}
      className={classNames(
        "feature-title pb-32 lg:py-24 font-heading text-5xl transition-colors",

      )}
      key={index}
    >
      {/* {children} */}
      <div className="career-item">
        <h1 className={`${isInView ? "text-greenPrimary" : "text-gray-300"} text-3xl`}>{item.title}</h1>
        {
          item.description && item.description.map((desc: string, i: number) => <p key={i} className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[18px] leading-7 mt-4`}>{desc}</p>)
        }

        <div className="flex flex-col ">
        {
          item.sections && item.sections.map((sec: any, i: number) => <div key={i}>
            <h2 className={`${isInView ? "text-slate-600" : "text-gray-300"} ${sec.list ? 'mb-6' : 'my-0'} text-[18px] leading-6 mt-8`}>{sec.title}</h2>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {sec.list && sec.list.map((detail: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                  <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                  <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px] leading-6`}>{detail}</li>
                </div>
              ))}
            </ul>
          </div>)
        }
        </div>
        {/* {item.details && (
          <div>
            <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl mt-8`}>Details:</h3>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {item.details.map((detail: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                  <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                  <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{detail}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
        {item.skills && (
          <div className="mt-8">
            <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Skills Needed:</h3>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {item.skills.map((skill: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{skill}</li>
              </div>
              ))}
            </ul>
          </div>
        )}
        {item.tools && (
          <div className="mt-8">
            <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Tools:</h3>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {item.tools.map((tool: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{tool}</li>
              </div>
              ))}
            </ul>
          </div>
        )}
        {item.parts && (
          <div className="mt-8">
            <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Parts:</h3>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {item.parts.map((part: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{part}</li>
              </div>
              ))}
            </ul>
          </div>
        )}
        {item.fit && (
          <div className="mt-8">
            <h3 className={`${isInView ? "text-slate-600" : "text-gray-300"} text-xl`}>Is this career for you?</h3>
            <ul className="flex flex-col gap-6 mt-4 pl-[1rem] lg:pl-4">
              {item.fit.map((fit: string, i: number) => (
                <div key={i} className="flex items-center gap-6 ">
                <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
                <li className={`${isInView ? "text-gray-600" : "text-gray-300"} text-[16px]`}>{fit}</li>
              </div>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};
