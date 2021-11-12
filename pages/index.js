import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MemeContainer from '../MemeContainer';

const RedditImageFetcher = require("reddit-image-fetcher");
let image;


export default function Home() {

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Meme Tab</title>
        <meta name="description" content="A new meme for every new tab." />
        <link rel="icon" href="https://as2.ftcdn.net/v2/jpg/04/55/01/17/1000_F_455011701_uQYOo6xLUaJ4PZVnbC22WmHxAOaDKCtC.jpg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <MemeContainer />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/tsouza_barbosa"
          target="_blank"
          rel="noopener noreferrer"
        >
      Made by{' Thiago '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
