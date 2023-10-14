import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';
import Forms from "../../components/Forms";
import Hero from '../../components/Hero';


export default function Home() {
  return (
    <div className={styles}>
    <Hero/>
    </div>    
  );
}
