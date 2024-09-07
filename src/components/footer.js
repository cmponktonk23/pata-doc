import { IconButton, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { VscSend } from "react-icons/vsc";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleBlur = () => {
        if (email.length > 0 && !email.includes('@')) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <footer className='flex text-center'>
            <div className='w-full bg-[#211d35] mt-10 px-3 relative'>
                <div className='absolute h-[260px] overflow-hidden left-20'>
                    <img src="/texture/cloud2.png" alt="cloud2" />
                </div>
                <div className='absolute h-[260px] overflow-hidden right-0'>
                    <img src="/texture/cloud1.png" alt="cloud2" />
                </div>
                <div className='max-w-screen-xl m-auto'>
                    <div className='flex justify-between gap-10 min-h-40 mt-5'>
                        <div className='flex flex-col text-white'>
                            <p className='font-calistoga text-[19px]'>Resources</p>
                            <div className='flex flex-col tracking-wide text-sm text-text-color leading-[0px]'>
                                <p className='hover:cursor-pointer'
                                    onClick={() => window.location.href = '/assets'}
                                >
                                    All Assets
                                </p>
                                <p className='hover:cursor-pointer'
                                    onClick={() => window.location.href = '/blogs'}
                                >Blogs</p>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <p className='font-calistoga text-[19px]'>About Us</p>
                            <div className='flex flex-col tracking-wide text-sm text-text-color leading-[0px]'>
                                <p>Our Story</p>
                                <p>Our Team</p>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <p className='font-calistoga text-[19px]'>Documents</p>
                            <div className='flex flex-col tracking-wide text-sm text-text-color leading-[0px]'>
                                <p>Licences</p>
                            </div>
                        </div>
                        <div className='flex flex-col text-white'>
                            <p className='font-calistoga text-[19px]'>Contact Us</p>
                            <TextField
                                placeholder='example@emial.com'
                                value={email}
                                label='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                variant="outlined"
                                onBlur={handleBlur}
                                error={error}
                                helperText={error ? 'Email must contain @' : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(46,36,75,1)'
                                                    }
                                                }}
                                            >
                                                <VscSend className='text-white' />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                        '& input': {
                                            color: 'white',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'white',
                                    },
                                }}
                            />
                        </div>
                        <div className='w-52 flex justify-center items-center my-5'>
                            <img src="/texture/logo_1_w.png" alt="" />
                        </div>
                    </div>
                    <div className='border-b mt-5'></div>
                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-text-color'> Copyright &copy; 2024. Pata Software Development Studio</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-6 text-text-color'>
                                <p className="font-calistoga text-[19px]">
                                    follow us on
                                </p>
                                <div className='flex gap-4 text-text-color text-xl'>
                                    <FaFacebookF className='cursor-pointer hover:scale-110' />
                                    <FaLinkedinIn className='cursor-pointer hover:scale-110' />
                                    <FaTwitter className='cursor-pointer hover:scale-110' />
                                    <FaInstagramSquare className='cursor-pointer hover:scale-110' />
                                    <FaYoutube className='cursor-pointer hover:scale-110' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}