import React from 'react';
import styles from "./nav.module.scss";
import Image from 'next/image'
import cover from '../public/tm_cover.jpg'

const info = () => {
  return (
    <div className={styles.info}>
        <Image
        src={cover}
        alt="cover picture"
        // width={500} //automatically provided
      // height={500} //automatically provided
        blurDataURL="data:..." //automatically provided
        placeholder="blur" // Optional blur-up while loading
      />
      <h1>Welcome to Tom Mboya University College</h1>
      <p>As an Institution, we value the contribution of everyone. It is humans that makes an Institution. 
        Therefore, whether you are a Student, Parent, Staff, The Public or an Administrator, your contribution 
        to the well being of the Institution is highly appreciated.</p>
    </div>
  )
}

export default info