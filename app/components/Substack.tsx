// import React, { useEffect } from 'react';

// const SubstackWidget = () => {
//   useEffect(() => {
//     // Define the CustomSubstackWidget on the window object
//     // window.CustomSubstackWidget = {
//     //   substackUrl: "oluwatobilobasalau.substack.com",
//     //   placeholder: "example@gmail.com",
//     //   buttonText: "Subscribe",
//     //   theme: "custom",
//     //   colors: {
//     //     primary: "#FFFFFF",
//     //     input: "#334155",
//     //     email: "#FFFFFF",
//     //     text: "#000000",
//     //   },
      
//     // };

//     window?.CustomSubstackWidget = {
//       substackUrl: "digitaleydrive.substack.com",
//       placeholder: "johndoe@gmail.com",
//       buttonText: "Subscribe",
//       theme: "custom",
//       colors: {
//         primary: "#3ec14b",
//         input: "#334155",
//         email: "#FFFFFF",
//         text: "white",
//       },
//       };

//     // Create a new script element
//     const script = document.createElement('script');

//     // Set the source of the script to the Substack widget script
//     script.src = "https://substackapi.com/widget.js";
//     script.async = true;

//     // Append the script to the body
//     document.body.appendChild(script);

//     // Cleanup function to remove the script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     }
//   }, []);

//   return (
//     <div id="custom-substack-embed"></div>
//   );
// };

// export default SubstackWidget;













import React, { useEffect } from 'react';

// Type declaration for CustomSubstackWidget
interface CustomSubstackWidget {
  substackUrl: string;
  placeholder: string;
  buttonText: string;
  theme: string;
  colors: {
    primary: string;
    input: string;
    email: string;
    text: string;
  };
}

// Extend the Window interface to include CustomSubstackWidget
declare global {
  interface Window {
    CustomSubstackWidget: CustomSubstackWidget;
  }
}

const SubstackWidget: React.FC = () => {
  useEffect(() => {
    // Define the CustomSubstackWidget on the window object
    window.CustomSubstackWidget = {
      substackUrl: "digitaleydrive.substack.com",
      placeholder: "johndoe@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#3ec14b",
        input: "#334155",
        email: "#FFFFFF",
        text: "white",
      },
    };

    // Create a new script element
    const script = document.createElement('script');

    // Set the source of the script to the Substack widget script
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="custom-substack-embed"></div>
  );
};

export default SubstackWidget;
