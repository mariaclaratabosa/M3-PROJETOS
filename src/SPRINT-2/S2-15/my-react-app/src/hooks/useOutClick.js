	import { useEffect, useRef } from "react";
	
	export const useOutClick = (callback) => {
	   const ref = useRef();
	
	   useEffect(() => {
	      const handleClick = (event) => {
	         if (!ref.current.contains(event.target)) {
	            callback({ ref, target: event.target });
	         }
	      };
	
	      window.addEventListener("mousedown", handleClick);
	
	      return () => {
	         window.removeEventListener("mousedown", handleClick);
	      };
	   }, []);
	
	   return ref;
	};
