import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hyunsoo</title>
        <link
          rel="icon"
          href="https://www.shutterstock.com/image-vector/dog-illustration-art-drawing-600nw-2476200107.jpg"
        />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Hyunsoo Introduction]</p>
        <p>(This is a website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLG}>Blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
