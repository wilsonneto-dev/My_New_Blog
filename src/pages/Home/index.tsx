import Head from "next/head";

import DefaultLayout from "shared/layout/DefaultLayout";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>just a test</main>
    </DefaultLayout>
  );
}
