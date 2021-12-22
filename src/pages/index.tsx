import Head from "next/head";
import { GetStaticProps } from "next";

import styles from "../styles/home.module.scss";

import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: { priceId: string; amount: number };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about the <span>React</span> world
          </h1>

          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1K9TBZBFMh7qhQoQsqLbKS83", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    redirect: 60 *60 * 24, //24 hours
  };
};
