import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import Heading from "../components/Heading";
import styles from '../styles/404.module.scss'

const Error:FC = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=> {
            router.push('/');
        }, 3000)
    }, [router])
    return (
        <div className={styles.wrapper}>
    <Head><title>404</title></Head>

            <div>
        <Heading text="404" tag="h1"/>
        <Heading text="Something went wrong !!!" tag="h2"/>
            </div>
        </div>
    );
};

export default Error;