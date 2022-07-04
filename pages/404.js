import Link from 'next/link';
import styles from "../styles/styles.module.css";


export default function FourOhFour() {
  return (
  <div className={styles.four_oh_four}>
    <h1> Page Not Found</h1>
    <Link href="/Academics">
      <a>
        Go back home
      </a>
    </Link>
  </div>
  )
}