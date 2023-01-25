import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const SuccessPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Subscribed! | WebDevCody</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-auto flex min-h-screen flex-col items-center justify-center gap-6 p-4">
        <Image
          width="100"
          height="100"
          className="rounded-full"
          src="/celebrating.svg"
          alt="woman celebrating"
        ></Image>
        <h1 className="text-4xl">Successfully subscribed!</h1>
        <p className="max-w-screen-sm text-lg">
          I hope you enjoy the content I produce and it helps you become a
          better web developer. Feel free to{" "}
          <a
            className="pointer text-wdc-primary hover:text-wdc-light"
            rel="noreferrer"
            href="https://discord.gg/4kGbBaa"
            target="_blank"
          >
            join my discord
          </a>{" "}
          or send me an email at{" "}
          <a
            className="pointer text-wdc-primary hover:text-wdc-light"
            href="mailto:webdevcody@gmail.com"
          >
            webdevcody@gmail.com
          </a>
          .
        </p>
      </main>
    </>
  );
};

export default SuccessPage;
