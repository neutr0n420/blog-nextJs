import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utliStyle from '../styles/utlis.module.css'

const Home = () => {
  return(
    <Layout Home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={utliStyle.headingMd}>
          <p>Hey I am Aryan an devloper based in India.</p>
          <p>
            This is the website I am building in the tutorial while learning NextJs. This is just a demo website. 
          </p>
        </section>
    </Layout>
  )
}