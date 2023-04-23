import FireLogo from "../assets/google-firebase-icon.svg"
import TSLogo from "../assets/typescript-programming-language-icon.svg"
import ReactLogo from "../assets/react-js-icon.svg"

function About() {
    return (
    
        <div className="bg-gradient-to-b from from-sky-50 to-fuchsia-300 min-h-screen text-center">
          <p className="text-xl pt-16 pb-8 p-2 ml-2 hover:font-semibold">
          <span className="font-semibold italic text-center">Auto-Matic</span> is made with modern technologies like React, Vite, 
           TypeScript, and Firebase for authentication while using Flask for the backend API. 
          </p>
          <div className="text-xl py-8 px-6 ml-8 m-2 text-left hover:font-semibold">
            This was designed for enthusiasts to manage their inventory in one place with <span className="italic"> ease</span>.
          </div>
          <div className="text-xl py-8 p-2 m-2 text-center hover:font-semibold">
          Users can sign in with their Google accounts to 
          <span className="font-semibold"> add</span>, 
          <span className="font-semibold"> update</span>, and  
          <span className="font-semibold"> delete</span> car information.
          </div>
          <p className="text-xl py-8 px-6 mr-8 m-2 text-right hover:font-semibold">
          <span className="font-semibold italic">
            Auto-Matic</span> is an obvious choice for anyone who wants to be a part of Open-Source car info! 
          </p>
          <p className="text-xl py-8 p-2 mt-2 mx-2 text-center hover:font-semibold">
          It <span className="font-semibold">IS</span> a shared inventory after all.
          </p>
          <div className="flex flex-row flex-wrap justify-evenly">
            <iframe src={ReactLogo} className="pl-4 py-5 hover:scale-125"></iframe>
            <iframe src={TSLogo} className="py-5 hover:scale-125"></iframe>
            <iframe src={FireLogo} className="py-5 hover:scale-125"></iframe>
          </div>
        </div>
      
    )
  }
  
export default About