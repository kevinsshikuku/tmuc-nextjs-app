import React, { useState, useEffect, useContext} from "react";
import { Context } from "../../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { Colors,initial } from '../../components/theme_color';


/** Photos from google maps */
export function Card({name, icon, href}) {
  const [ theme, setTheme] = useState(initial);
  const { dispatch} =  useContext(Context)

  const load = () => {
    dispatch({
      type: "LOAD",
      payload: true
    })
  }

  useEffect(()=> {
     setTheme(Colors())
  },[])

   return (
     <div className={styles.card} style={{color: theme?.background}} >
       <a href={href} onClick={() => load()} className={styles.link}>
       <FontAwesomeIcon icon={icon} style={{width:'30px', color:theme.primary}}  />
        <h4 style={{color:theme.link}} className={styles.h4}>{name}</h4>
       </a>
     </div>
   )
 }