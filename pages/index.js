import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Karlgusta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my warm abourd! ⚓</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <p className={styles.description}>
          Join me.
        </p>

        <div className={styles.grid}>
          <a href="blogs" className={styles.card}>
            <h2>Blogs &rarr;</h2>
            <p>Here are some of the blogs I contribute to.</p>
          </a>

          <a href="apps" className={styles.card}>
            <h2>Apps &rarr;</h2>
            <p>Want to see my trophies? Let me walk you to my trophy room!</p>
          </a>

          <a
            href="resume"
            className={styles.card}
          >
            <h2>Resume &rarr;</h2>
            <p>Even Stephen Curry has a resume. I didn&#39;t want to be left out</p>
          </a>

          <a
            href="socialmedia"
            className={styles.card}
          >
            <h2>Social media &rarr;</h2>
            <p>
              I&#39;m social here. Very. Especially Twitter.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
