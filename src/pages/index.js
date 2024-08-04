import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BrazilJS Conf 2025</title>
        <meta name="description" content="BrazilJS is the biggest JavaScript conference in the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/braziljs-conf-logo-transparente.png" />
        {
          process.env.NODE_ENV === 'production' && (
            <base href="https://braziljs.github.io/2025-conf/" target="_blank" />
          )
        }
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles['btns-container']}>
            <a
              href="https://conf.braziljs.org/BrazilJS%20Conf%202024-media-kit.pdf"
              target="_blank"
              className={styles['like-a-button']}
            >
              Become early sponsor
            </a>
            <a
              href="https://www.braziljs.org/p/coc"
              target="_blank"
              className={styles['like-a-button']}
            >
              Code Of Conduct
            </a>
          </div>
          <div>
            <a
              href="https://dex01.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}DEx01
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/braziljs-conf-logo-transparente.png"
            alt="Next.js Logo"
            width={300}
            height={267}
            priority
          />
          Comming soon
        </div>

        <div className={styles.grid}>
          <span
            href="https://braziljs.org"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <a
              href="https://braziljs.org"
              target="_blank"
            >
              <h2>
                BrazilJS <span>-&gt;</span>
              </h2>
              <p>
                News, articles, updates and more<br/>
              </p>
            </a>
            <br/>
            <a
              href="https://dex01.com.br"
              // className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                DEx01 <span>-&gt;</span>
              </h2>
              <p>
                Get to know our company.
              </p>
            </a>
          </span>

          <span
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Social networks
            </h2>
            <p>
              <a
                href="https://twitter.com/braziljs"
                target="_blank"
              >
                X/Twitter
              </a><br/>
              <a
                href="https://www.instagram.com/brazil.js"
                target="_blank"
              >
                Instagram
              </a><br/>
              <a
                href="https://www.linkedin.com/company/braziljs"
                target="_blank"
              >
                LinkedIn
              </a><br/>
              <a
                href="https://www.facebook.com/braziljs"
                target="_blank"
              >
                Facebook
              </a><br/>
            </p>
          </span>

          <a
            href="https://youtube.com/braziljs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Videos <span>-&gt;</span>
            </h2>
            <p>
              News of the week and all the talks from previous conferences.
            </p>
          </a>

          <span
            className={styles.card}
            href="https://dex01.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Previous Events
            </h2>
            <p className={styles.grid}>
              <a href="https://conf.braziljs.org" target="_blank">2024</a><br/>
              <a href="https://2019.braziljs.org" target="_blank">2019</a><br/>
              <a href="https://2018.braziljs.org" target="_blank">2018</a><br/>
              <a href="https://2017.braziljs.org" target="_blank">2017</a><br/>
              <a href="https://2016.braziljs.org" target="_blank">2016</a><br/>
              <a href="https://2015.braziljs.org" target="_blank">2015</a><br/>
              <a href="https://2014.braziljs.org" target="_blank">2014</a><br/>
              <a href="https://2013.braziljs.org" target="_blank">2013</a><br/>
              <a href="https://2012.braziljs.org" target="_blank">2012</a><br/>
              <a href="https://2011.braziljs.org" target="_blank">2011</a><br/>
            </p>
          </span>
        </div>
      </main>
    </>
  );
}
