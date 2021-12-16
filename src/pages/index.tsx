import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
    <title>Inicio | ig.news</title>
    </Head>
    
    <main className={styles.container}>
      <section className={styles.hero}>
        <span>👏  Hey, welcome</span>

        <h1>News about the <span>React</span> world</h1>

        <p>
          Get access to all the publication <br />

          <span>for $9.9 month</span>
        </p>

        <SubscribeButton />
      </section>

      <img src="images/avatar.svg" alt="Girl coding" />
    </main>
   </>
  )
}
