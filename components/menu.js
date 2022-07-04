import React, { useState, useEffect, useContext, useRef} from 'react';
import { useRouter } from 'next/router';
import {Colors, initial} from '../components/theme_color';
import styles from "./nav.module.scss";
import { Context } from "../context";


/** Menu  */
export default function AccountMenu() {
  const ref = useRef();
  const { replace} = useRouter();
  const [ theme, setTheme] = useState(initial);
  const [ isdesktop, setIsdesktop] = useState(false)
  const { dispatch } = useContext(Context);

 useEffect(()=> {
     setTheme(Colors())
  },[])


 useEffect(() => {
    const checkIfClickedOutside = e => {
// If the menu is open and the clicked target is not within the menu, then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        dispatch({
          type: "CLOSE",
          payload: false
        })
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
// Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [])

  const navigate = (route) => {
    replace(route);
    dispatch({
      type: "CLOSE",
      payload: false
    })
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      let width = window.innerWidth
      if (width > 800){
        setIsdesktop(true)
      }
    }
   },[])

// Sharing the app link
    async function onShare() {
      const label= "T.M.U.C"
      const url = "https://tmuc.netlify.app";
      const text = "TMUC APP";
      try {
          await navigator
          .share({
            label,
            url,
            text
          })

        } catch (err) {

            // the user cancels the action of sharing
          console.log("share canceled");
        }
    }
    
  return (
        <div 
            className= {styles.MenuWrapper}
            style={{width: isdesktop ? "45vw": "100vw", marginTop: isdesktop ? "4rem": "0", color:theme.primary }}
            ref={ref} 
            onClick={() => dispatch({
              type: "OPEN",
              payload: false
            })}
            >
           <div className={styles.MenuItems} style={{backgroundColor: theme.background, color:theme.primary}} >
              <p onClick={() => navigate("/Academics")} >ACADEMICS</p>
              <p onClick={() => navigate("/Activities")}>NEWS</p>
              <p> STUDENT-CENTER</p>
              <p> PIN A POST</p>

              <p onClick={onShare}> SHARE THIS APP</p>
              <p onClick={() => navigate("/Settings")} >SETTINGS</p>

           </div>
        </div>
  );
}
