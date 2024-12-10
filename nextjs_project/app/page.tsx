import Link from "next/link";
import styles from './Home.module.css';


const Home = () => {
  return (
    <>
    <div>
      HOME
    </div>
      <Link href='pages/test'>
      <span className={styles.link}>Go to Test Page</span>
      </Link>
      </>
 
  );
}

export default Home