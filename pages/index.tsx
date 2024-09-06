/** @format */

import Head from "next/head";
import About from "@/common/components/views/about/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kun Zhu</title>
        <meta name="description" content="Welcome to my personal website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kun.png" type="image/png" />
      </Head>
      <main>
        <body>
          <About />
        </body>
      </main>
    </>
  );
}
