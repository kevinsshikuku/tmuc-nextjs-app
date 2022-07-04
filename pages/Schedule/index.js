import React, { useState, useEffect} from 'react';
import Event from "./Event";
import Add from "./Add";
import styles from "./styles.module.scss";
import {Colors, initial} from '../../components/theme_color';
import {  faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Time table component.
const  Index = () => {
  const [ close, setClose] = useState(false);

  const [ theme, setTheme] = useState(initial);

 
 useEffect(()=> {
    setTheme(Colors())
 },[])

    return (
      <div className={styles.timetable_wrapper} style={{backgroundColor:theme.farground, color: theme.primary}} suppressHydrationWarning={true}>
        { !close &&
          <div  className={styles.open} style={{color: theme.link}} onClick={() => setClose(!close)}>
            <sub>Add</sub> { <FontAwesomeIcon icon={faAdd}/>}
          </div>
        }

        { close &&
          <div>
           { (typeof window !== 'undefined' ) &&  <Add close={() =>  setClose()}/>}
          </div>
        }
       { (typeof window !== 'undefined' ) && <Event/>}

      </div>
    )
}

export default Index;    