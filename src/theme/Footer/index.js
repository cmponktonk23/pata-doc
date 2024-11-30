import React from 'react';
// import { useThemeConfig } from '@docusaurus/theme-common';
// import FooterLinks from '@theme/Footer/Links';
// import FooterLogo from '@theme/Footer/Logo';
// import FooterCopyright from '@theme/Footer/Copyright';
// import FooterLayout from '@theme/Footer/Layout';

// function Footer() {
//     const { footer } = useThemeConfig();
//     // if (!footer) {
//     //     return null;
//     // }
//     // const { copyright, links, logo, style } = footer;
//     return (
//         <p>adfasdfasdfsadf</p>
//         // <FooterLayout
//         //     style={style}
//         //     links={links && links.length > 0 && <FooterLinks links={links} />}
//         //     logo={logo && <FooterLogo logo={logo} />}
//         //     copyright={copyright && <FooterCopyright copyright={copyright} />}
//         // />
//     );
// }


import { FaFacebookF, FaDiscord, FaTwitter } from "react-icons/fa";
import style from './styles.module.css';
import CustomImage from '@site/src/components/CustomImage';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeConfig } from '@docusaurus/theme-common';


function Footer() {
    const { myfooter } = useThemeConfig();
    if (!myfooter) {
        console.log('noooooooooooooooooooooo')
    }
    const { colorMode } = useColorMode();
    const { bglight, bgdark, textlight, textdark, src, srcDark, headinglight, headingdark } = myfooter;


    const styles = {
        contain: {
            display: 'flex',
            textAlign: 'center',
        },
        back: {
            width: '100%',
            backgroundColor: colorMode === 'dark' ? bgdark : bglight,
            marginTop: '2.5rem',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            position: 'relative',
        },
        cloud1: {
            position: 'absolute',
            height: '250px',
            overflow: 'hidden',
            left: '5rem',
        },
        cloud2: {
            position: 'absolute',
            height: '250px',
            overflow: 'hidden',
            right: '0px',
        },
        panel: {
            maxWidth: '960px',
            margin: 'auto',
            padding: '10px',
            position: 'relative',
            zIndex: '10'
        },
        content: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '3rem',
            minHeight: '10rem',
            marginTop: '1.25rem',
        },
        footertext: {
            display: 'flex',
            flexDirection: 'column',
            color: colorMode === 'dark' ? headingdark : headinglight,
            '&:hover': {
                color: 'orange',
            }
        },
        logo: {
            height: '9rem',
            display: 'flex',
        },
    }

    return (
        <footer style={styles.contain}>
            <div style={styles.back}>
                <div style={styles.cloud1}>
                    <CustomImage src="/img/cloud2.png" alt="cloud2" />
                </div>
                <div style={styles.cloud2}>
                    <CustomImage src="/img/cloud1.png" alt="cloud1" />
                </div>
                <div style={styles.panel}>
                    <div style={styles.content}>
                        <div style={styles.logo}>
                            <CustomImage src={colorMode === 'dark' ? srcDark : src} alt="logo" />
                        </div>
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '1.5rem' }}>Resources</p>
                            <div className={style.linktext}>
                                <p
                                    onClick={() => window.location.href = 'https://patastudio.store/blogs'}
                                >Blogs</p>
                            </div>
                            <div className={style.linktext}>
                                <p
                                    onClick={() => window.location.href = 'https://patastudio.store/blogs'}
                                >Tutorials</p>
                            </div>
                        </div>
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '1.5rem' }}>Documents</p>
                            <div className={style.linktext}>
                                <p
                                    onClick={() => window.location.href = 'https://patastudio.store/license'}
                                >Licences</p>
                            </div>
                            <div className={style.linktext}>
                                <p
                                    onClick={() => window.location.href = 'https://patastudio.store/faq'}
                                >FAQ</p>
                            </div>
                        </div>
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '1.5rem' }}>Content Us</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', color: colorMode === 'dark' ? textdark : textlight }}>
                                <FaFacebookF className={style.social} />
                                <FaTwitter className={style.social} />
                                <FaDiscord className={style.social} />
                            </div>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1.5px solid', width: '100%', color: 'rgba(200,200,200,0.2)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                        <p style={{ fontSize: '16px', lineHeight: '1.25rem', color: colorMode === 'dark' ? textdark : textlight, margin: '0' }}>
                            Copyright &copy; {new Date().getFullYear()}. Pata Studio Inc.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);
