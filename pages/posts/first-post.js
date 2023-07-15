import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout"

export default function FirstBlog(){
    return(
        <>
            <Layout>

                <Head>
                    <title>First Post</title>
                </Head>
                <h1>First Post</h1>
                <h2><Link href='/'>Back to Home</Link></h2>
                
            </Layout>
        </>
    )
}