import React from 'react';

const Footer = () => {
    return (
        <section className="pb-3">
            <p className='text-center'>&copy; <a href="https://github.com/NafisTahmid" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">MD. Nafis Tahmid</a> | {(new Date()).getFullYear()}</p>
        </section>
    );
};

export default Footer;