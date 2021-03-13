import Head from 'next/head'
import LandingHome from '../src/components/Pages/LandingHome'

export default function Home () {
  return (
    <>
      <Head>
        <title>Template nextJs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingHome />
    </>

  )
}
