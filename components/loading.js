import React from 'react';
import styles from './components.module.scss';

const Loading = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.image}/>
        <div className= {styles.text} />
        <div  className={styles.more}/>
    </div>
  )
}

export default Loading