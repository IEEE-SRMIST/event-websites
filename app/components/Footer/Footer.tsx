import React from 'react';

const Footer: React.FC = () => {
    return (
    <>
        <footer className='text-center py-6 bg-secondary font-bold'>
			<p className='text-center mb-4 text-orange-600'>
                <span>Email: ieee@srmist.edu.in</span>
                <span className='ml-5'>Phone: +91 76749 76687</span>
                <a href='https://instagram.com/ieeesrmist?igshid=MzRlODBiNWFlZA==' className='ml-5' target='_blank' rel='noopener noreferrer'>Instagram</a>
                <a href='https://www.facebook.com/ieeesrmist?mibextid=LQQJ4d' className='ml-5' target='_blank' rel='noopener noreferrer'>Facebook</a>
            </p>
            <p className='text-center mb-4'>
                <span>Home </span>
                <span className='ml-5 mb-4'>About</span>
                <a href='' className='ml-5'>Mentors</a>
                <a href='' className='ml-5'>Contact</a>
                <a href='' className='ml-5'>Gallery</a>
                <a href='' className='ml-5'>Register</a>
            </p>
            <p className='text-center mb-4'>
                <a href='https://www.ieeesrmist.com/PrivacyPolicy' className='hover:text-orange-600' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>
                <a href='https://www.ieeesrmist.com/TermsAndConditions' className='ml-5 hover:text-orange-600' target='_blank' rel='noopener noreferrer'>Terms & Conditions</a>
            </p>
            <p>© IEEE SRMIST</p>
        </footer>
    </>
    );
};

export default Footer;