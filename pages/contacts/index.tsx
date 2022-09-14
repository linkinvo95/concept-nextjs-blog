import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import Heading from '../../components/Heading';
import {contactType} from '../../types'

type contactsTypeProps = {
    contacts: [contactType],
}


export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { contacts: data },
    }
}



const Contacts: FC<contactsTypeProps> = ({ contacts }) => {

    return (
        <>
            <Head><title>Contacts</title></Head>
            <Heading  tag='' text='Contacts list:' />
            <ul>
                {contacts && contacts.map(({ id, name }) => (
                    <li key={id}>
                        <Link href={`/contacts/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Contacts;