import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const Menu = () => {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        
        <div className={styles.navbar}>
          <a href='./'>Home</a> |
          <a href='./Chapter2_1'> Chapter2_1</a> | 
          <a href='./Chapter2_2'> Chapter2_2</a> |
        </div>

        <div className={styles.grid}>
        </div>
        
      </main>
    </>
  )
}
export default Menu;