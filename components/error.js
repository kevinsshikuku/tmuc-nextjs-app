import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import styles from './components.module.scss';

const Error = () => {
  return (
    <div style={{textAlign:"center"}}>
 <br/>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <FontAwesomeIcon icon={faTriangleExclamation}  style={{width:'15px', color:"brown"}} />
            <p>Error while fetching the news</p>
          </div>
          <div className= {styles.text} />
          <div  className={styles.more}/>
      </div>
    </div>
  )
}

export default Error;