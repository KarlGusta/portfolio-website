import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Blogs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Karlgusta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Blogs!</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <p className={styles.description}>
          Join me.
        </p>

        <div className={styles.grid}>
          <a href="https://www.freecodecamp.org/news/how-to-learn-javascript-faster/" className={styles.card}>
            <h2>freeCodeCamp English &rarr;</h2>
            <p>See my contributions on freeCodeCamp's English Publication.</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>freeCodeCamp Swahili &rarr;</h2>
            <p>freeCodeCamp Swahili blogs here.</p>
          </a>

          <a href="https://annohkarlgusta.hashnode.dev/" className={styles.card}>
            <h2>Hashnode &rarr;</h2>
            <p>Read my Hashnode blogs</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Dev.to &rarr;</h2>
            <p>Dev.to blogs here.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>TealFeed &rarr;</h2>
            <p>
              TealFeed blogs here.
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
