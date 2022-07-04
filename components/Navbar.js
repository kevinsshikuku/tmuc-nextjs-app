import { useState, useEffect, useContext } from "react";
import styles from "./nav.module.scss";
import { useRouter } from 'next/router';
import {Colors, initial} from '../components/theme_color';
import { Context } from "../context";
import Menu from "./menu";
import Info from "./info";


/** Tabed Navigation bar */
 const Navbar = () => {
   const { pathname, replace} = useRouter();
   const [ theme, setTheme] = useState(initial);
   const { state, dispatch } = useContext(Context);
   const [ isdesktop, setIsdesktop] = useState(false)

    useEffect(()=> {
      setTheme(Colors())
    },[])

   const  click_handler = (route) => {
      replace(route)
      dispatch({
        type: "OFFLOAD",
        payload: false
      })
   }

   const open_menu = () => {
    dispatch({
      type: "OPEN",
      payload: true
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

  return (
    <div className={styles.container} style={{backgroundColor:theme.header, color: theme.primary}}>


       { state.Menu && <Menu/>}
       { isdesktop && <Menu/>}
       { isdesktop && <Info/>}

       { state.Loading && 
        <div className={styles.meter} style={{width: isdesktop ? "45vw" : "100vw"}}>
          <span styles={{ width: "100%"}}></span>
        </div> 
       }
        <div className={styles.headline}>
          <p>TOM MBOYA STUDENT</p>
        </div>
       <div className={styles.tabs} style={{width: isdesktop ? "40vw": "100vw" }}>
       
          <div className="tabA">
            <p onClick={() => click_handler("/Academics")} className={styles.p}> ACADEMICS </p>            
          </div>
          <div className="tabB" >
             <p onClick={() => click_handler('/Schedule')} className={styles.p}>SCHEDULE</p>
          </div>
          <div className='tabC'>
            <p onClick={() => click_handler('/Activities')} className={styles.p}>ACTIVITIES</p>
          </div>
         { !isdesktop && 
         <div className={styles.menu} onClick ={() => open_menu()}>
              <div/>
              <div/>
              <div/>
          </div>}
       </div>


       <style jsx >{`
        .tabA {   
          border-bottom: ${pathname === '/Academics' ? '4px solid #1771e0' : ''};
          font-weight: bolder;
          width: calc(100%/3);
          text-align: center;
          display: flex;
          justify-content: center;
        }  

        .tabB {   
          border-bottom: ${pathname === '/Schedule' ? '4px solid #1771e0' : ''};
          font-weight: bolder;
          width: calc(100%/3);
          text-align: center;
          display: flex;
          justify-content: center;
        }
        .tabC {   
          border-bottom: ${pathname === '/Activities' ? '4px solid #1771e0' : ''};
          font-weight: bolder;
          width: calc(100%/3);
          text-align: center;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}


export default Navbar;