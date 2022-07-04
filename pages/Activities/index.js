import Head from 'next/head'
import React, {useState, useContext, useEffect} from 'react';
import { Context } from "../../context";
import Image from 'next/image';
import { useQuery } from "react-query";
import styles from './styles.module.scss';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router';
import { initial} from '../../components/theme_color';
import Error from "../../components/error";
import Loading from '../../components/loading';



export default function Home() {
  const { replace} = useRouter();
  const [data, setData] = useState([])
  const [ theme ] = useState(initial);
  const { dispatch } = useContext(Context)

  const { isLoading, error, data:payload } = useQuery('news', () =>
    fetch('/api/news').then(res =>
      res.json()
    )
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      let info = window.localStorage.getItem("news");
       info ? setData(JSON.parse(info) ) : null
    }
  }, [])
let online;
if(typeof window !== "undefined") {
    online = window.navigator.onLine
}


  useEffect(() => {
    if (typeof window !== "undefined") {
      if(payload?.info){
          localStorage.setItem("news", JSON.stringify(payload.info))
      }
    }
  }, [payload, online])


  const handlers = useSwipeable({
    onSwiped: (eventpayload) => {
     const { dir} = eventpayload;
     if(dir === 'Right'){
        replace('/Schedule')
        dispatch({
          type: "OFFLOAD",
          payload: false
        })
     }
    },
 });
 

let skeleton = Array.from(Array(10).keys())


  return (
    <div {...handlers} className={styles.news} style={{color: theme?.primary, backgroundColor: theme?.farground}}>
    <Head>
        <title>TMUC | News</title>
        <meta name="description" content="TMU APPLICATION" />
        <link rel="icon" href="/favicon.png" />
    </Head>

      <main>

        { (data?.error || error || data.length === 0) && 
           skeleton.map((i) => (
            <div style={{margin:'20px'}}>
               <Error/>
            </div>
           ))
          }

        { ( data || isLoading ) && data.map((el, i) => (
            <div key={i} className={styles.news_item}>
              <Post data={el}/>
            </div>
          ))}
      </main>
    </div>   
  )
}




/** Post component */
const Post = ({data}) => {
  const {link, ad_link, title, img, ad_img, ad } = data;
  const myLoader = () => {
    let link = ad_img ? `https://photos.google.com/${ad_img}?w=${50}&q=${100}` : `https://tmuc.ac.ke/${img}?w=${50}&q=${100}` ?? ''
    return link
  }

  return(
    <div>
      <div>
        {ad && <sup>Ad</sup>}
        {img && 
            <Image
              loader={myLoader}
              src="schol.png"
              alt={title}
              className={styles.image}
              width={400}
              height={250}
              />
          }
      </div>
      <p>{title} </p>
      <br/>
      <a href={ ad_link || `https://tmuc.ac.ke/${link}`} style={{color:"blueviolet"}} >Read more ...</a>
    </div>
  )
}