import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Apps() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Karlgusta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/apps">Apps!</Link>
        </h1>

        <p className={styles.description}>
          These are some of the apps and projects I&#39;m creating{' '}
          <code className={styles.code}>as time goes by!</code>
        </p>

        {/* <p className={styles.description}>
          Join me.
        </p> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>freeCodeCamp English &rarr;</h2>
            <p>freeCodeCamp English blogs here.</p>
          </a>

          <a href="https://t.co/jdXgDiEuYp" className={styles.card}>
            <h2>General Life&#39;s Knowledge &rarr;</h2>
            <p>Here, you can get random questions about life. Anything goes except the sensored stuffs!</p>
          </a>
        </div>

        <h2 className={styles.title}>
          Hello, <Link href="/apps">Open source!</Link>
        </h2>

          <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>freeCodeCamp English &rarr;</h2>
            <p>freeCodeCamp English blogs here.</p>
          </a>

          <a href="https://t.co/jdXgDiEuYp" className={styles.card}>
            <h2>General Life&#39;s Knowledge &rarr;</h2>
            <p>Here, you can get random questions about life. Anything goes except the sensored stuffs!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Hashnode &rarr;</h2>
            <p>Hashnode blogs here.</p>
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
