import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';
import Heading from '../../components/Heading';
import {postType} from '../../types'

type postsTypeProps = {
    posts: postType,
  }

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts: data },
    }
}

const Posts:FC<postsTypeProps> = ({ posts }) => {
    return (
        <>
            <Head><title>Contacts</title></Head>
            <Heading text='Contacts list:' tag='h1' />
            <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Posts;