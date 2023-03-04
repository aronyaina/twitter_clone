import Head from "next/head";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/* Side bar */}
        <Sidebar />
        {/* Feedback */}

        {/* Widget */}
      </main>
    </>
  );
}
