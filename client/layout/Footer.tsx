import React from 'react';

const Footer: React.FC<{}> = () => {
    return (
        <div
            className='bg-repeat-x bg-cover'
            style={{ backgroundImage: 'url(/assets/wave.svg)' }}
        >
            <div className='ml-auto mr-auto max-w-4xl px-2 lg:px-0 pt-32'>
                <div className='flex flex-wrap -ml-1 -mr-1'>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Products
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://blur.page"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A browser extension to hide sensitive element on page"
                                >
                                    Blur Page
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://checkbrowsers.support"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A browser extension to check browser compatibility without leaving your tab"
                                >
                                    Check Browsers Support
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://fakenumbers.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A JavaScript library to fake a number"
                                >
                                    Fake Numbers
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://formvalidation.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="The best validation library for JavaScript"
                                >
                                    Form Validation
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://react-pdf-viewer.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A PDF viewer made for React"
                                >
                                    React PDF Viewer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Resources
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://1loc.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Favorite JavaScript utilities in single line of code"
                                >
                                    1 LOC
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://csslayout.io"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A collection of popular layouts and patterns made with CSS"
                                >
                                    CSS Layout
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://getfrontend.tips"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Super tiny, quick tips, tricks and best practices of front-end development"
                                >
                                    Front-end Tips
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://htmldom.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Common tasks of managing HTML DOM with native API"
                                >
                                    HTML DOM
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://responsive.page"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="A collection of patterns to create a responsive web page"
                                >
                                    Responsive Design Patterns
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://thisthat.dev"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="What is the difference between ___ and ___ in the front-end development?"
                                >
                                    this VS that
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-1/3 px-1 mb-6'>
                        <h3
                            className='text-xl sm:text-2xl font-bold mb-2'
                            style={{
                                color: '#FFEAA7',
                                textShadow: '0px 4px 8px rgba(38, 50, 56, 0.08), 0px 2px 4px rgba(38, 50, 56, 0.16)',
                            }}
                        >
                            Follow me
                        </h3>
                        <ul>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://dev.to/phuocng"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    dev.to
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://github.com/phuoc-ng"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    className='text-white'
                                    href="https://twitter.com/nghuuphuoc"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='text-center py-8' style={{ color: '#C2C2C2' }}>
                    © 2020-{new Date().getFullYear()} Nguyen Huu Phuoc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
