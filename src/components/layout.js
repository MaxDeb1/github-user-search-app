import Head from 'next/head'
import Image from 'next/image'
import dynamic from "next/dynamic";
import styles from './layout.module.css'

function IndexPage({ children }) {
  const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
    ssr: false,
  });

    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Frontend Mentor | GitHub user search app coding challenge</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        </Head>
        <header className={styles.header}>
            <h1 className={styles.title}>devfinder</h1>
            <ThemeToggle />
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
{/*           <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a> */}
        </footer>
      </div>
    )
  }
  
  export default IndexPage