import React from "react";

type Props = {};

const WhyDigitaley = (props: Props) => {
  return (
    <div
      id="why-digitaley"
      className="bg-[#005DE80C] lato p-6 lg:p-12 py-12 rounded-md lg:rounded-2xl"
    >
      <h2 className="font-bold  text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
        Why Digitaley Drive?
      </h2>

      <div className="max-w-[85rem] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-full mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                  <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Experts Vetted
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We choose our teams carefully. Our people are the secret to an excellent learning experience.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Build Innovators
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We equip talents to become innovators through high value training and development.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Strong empathy
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We have user tested our own learning process by mentoring over 10,000+ Students.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
               {/* Icon Block */}
               <div className="flex">
              <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                  />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Collaborative Development
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Join our team of solution oriented talents to build real-world innovative projects and models in hackathon sessions.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Great Learning Experience
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Our writers have expertise in each specific industries, delivering exceptional learning contents and knowledge
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <svg
                  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                  />
                </svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Great Learning Experience
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  From each course, we give you an opportunity that adds great value.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
              <svg
  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  fill="currentColor"
  viewBox="0 0 128 128"
>
  <g>
    <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S72.8,82,64,82z"/>
    <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9 l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z"/>
    <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z"/>
    <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20 c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z"/>
    <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z"/>
    <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1 c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z"/>
  </g>
</svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Global Community
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                  We give you access to a sophisticated pool of people, talents and leaders in over 26 countries.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
              <svg
  className="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M12,22a1,1,0,0,0,.707-.293l9-9a1,1,0,0,0,.29-.784l-.643-8.357a1,1,0,0,0-.92-.921L12.077,2a1,1,0,0,0-.784.29l-9,9a1,1,0,0,0,0,1.414l9,9A1,1,0,0,0,12,22Zm.382-17.968,7.044.542.542,7.044L12,19.586,4.414,12Zm2.061,5.525a2,2,0,1,1,2.828,0A2,2,0,0,1,14.443,9.557Z"/>
</svg>
                <div className="ml-5 sm:ml-8">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Simple and affordable
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    We have an array of free and affordable classes for students
                    who want to dip their feet into the world of data analytics.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* End Icon Block */}
             
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </div>
  );
};

export default WhyDigitaley;