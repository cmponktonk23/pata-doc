import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MyHomePage from '@site/src/components/MyHomePage';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import CustomImage from '@site/src/components/CustomImage';
import Link from '@docusaurus/Link';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <CustomImage style={{ width: '15rem', marginBottom: '3rem' }} src="/img/logo_studio.png" alt="Pata Assistant" />
                    <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>Empowering Game Creation</h2>
                    <Link
                        to="/docs/overview"
                        style={{ textDecoration: 'none' }}
                    >
                        <button className={styles.button}>
                            Check Documents
                        </button>
                    </Link>
                </Heading>

            </div>
        </header>
    );
}


export default function Home() {


    const { siteConfig, isClient } = useDocusaurusContext();

    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <MyHomePage />
                {/* <HomepageFeatures /> */}
            </main>
        </Layout>
    );
}
