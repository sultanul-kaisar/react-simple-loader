import React, { useEffect, useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

const ProgressBar = ({ children }) => {
 const [progress, setProgress] = useState(false);

 useEffect(() => {
   setProgress(true);
   const timer = setTimeout(() => {
     setProgress(false);
   }, 1000); 
   return () => clearTimeout(timer);
 }, [children]);

 return (
   <>
     {progress && <TopBarProgress />}
     {children}
   </>
 );
};

export default ProgressBar;
