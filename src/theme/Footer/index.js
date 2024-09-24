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


import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
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
            // backgroundColor: '#211d35',
            backgroundColor: colorMode === 'dark' ? bgdark : bglight,
            marginTop: '2.5rem',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            position: 'relative',
        },
        cloud1: {
            position: 'absolute',
            height: '260px',
            overflow: 'hidden',
            left: '5rem',
        },
        cloud2: {
            position: 'absolute',
            height: '260px',
            overflow: 'hidden',
            right: '0px',
        },
        panel: {
            maxWidth: '1280px',
            margin: 'auto',
            padding: '10px',
            position: 'relative', 
            zIndex: '10'  
        },
        content: {
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2.5rem',
            minHeight: '10rem',
            marginTop: '1.25rem',
        },
        footertext: {
            display: 'flex',
            flexDirection: 'column',
            // color: 'white'
            color: colorMode === 'dark' ? headingdark : headinglight,
        },
        linktext: {
            display: 'flex',
            flexDirection: 'column',
            letterSpacing: '0.025em',
            fontSize: '0.875rem',
            // color: '#9a91b1',
            color: colorMode === 'dark' ? textdark : textlight,
            lineHeight: '0px',
            cursor: 'pointer',
            
        },
        logo: {
            width: '13rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1.25rem 0',
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
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '19px' }}>Resources</p>
                            <div style={styles.linktext}>
                                <p className='hover:cursor-pointer'
                                    onClick={() => window.location.href = 'http://localhost:8080/assets'}
                                >
                                    All Assets
                                </p>
                                <p className='hover:cursor-pointer'
                                    onClick={() => window.location.href = '/blogs'}
                                >Blogs</p>
                            </div>
                        </div>
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '19px' }}>About Us</p>
                            <div style={styles.linktext}>
                                <p>Our Story</p>
                                <p>Our Team</p>
                            </div>
                        </div>
                        <div style={styles.footertext}>
                            <p style={{ fontSize: '19px' }}>Documents</p>
                            <div style={styles.linktext}>
                                <p>Licences</p>
                            </div>
                        </div>
                        <div style={styles.logo}>
                            <CustomImage src={colorMode === 'dark' ? srcDark : src} alt="logo" />
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid', marginTop: '1.25rem', width: '100%', color: 'rgb(200,200,200)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: '14px', lineHeight: '1.25rem', color: colorMode === 'dark' ? textdark : textlight, margin: '0' }}>
                            Copyright &copy; 2024. Pata Software Development Studio
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: colorMode === 'dark' ? textdark : textlight }}>
                                <p style={{ fontSize: '19px', display: 'flex', alignItems: 'center', margin: '0' }}>
                                    follow us on
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', color: colorMode === 'dark' ? textdark : textlight, fontSize: '1.25rem', lineHeight: '1.75rem', }}>
                                    <FaFacebookF className={style.social} />
                                    <FaLinkedinIn className={style.social} />
                                    <FaTwitter className={style.social} />
                                    <FaInstagramSquare className={style.social} />
                                    <FaYoutube className={style.social} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer);
