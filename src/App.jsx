import NavBar from "./component/NavBar"
import Home from "./component/Home";
import SocialMedia from "./component/SocialMedia";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import About from "./component/About"
import {useState} from "react"


function App() {

  let [isDark , setIsDark] = useState(true);


  return (
    <div className="h-[100vh] w-[100vw]">
        
        <NavBar  isDark={isDark} setIsDark={setIsDark} />
        <Home   isDark={isDark} setIsDark={setIsDark} />
        <About  isDark={isDark} setIsDark={setIsDark} />
        <Portfolio   isDark={isDark} setIsDark={setIsDark} />
        <Experience  isDark={isDark} setIsDark={setIsDark} />
        <Contact  isDark={isDark} setIsDark={setIsDark} /> 

        <SocialMedia  isDark={isDark} setIsDark={setIsDark} />

    </div>  
  );
}

export default App;
