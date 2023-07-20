import React from 'react'
import { Logo } from '../../Assets'


const current = new Date();
const date = current.getFullYear();

const footerNavs = [
    {
        href: '../#about',
        name: 'About  '
    },
    {
        href: '../#start',
        name: 'Get Started '
    },
    {
        href: '../#vision',
        name: 'Vision'
    },
]

const Footer = () => {
    return (
        <div>
            <footer className="text-white bg-opacity-0 px-4 py-5 mt-10 max-w-screen-xl mx-auto md:px-8">
                <div className="max-w-lg sm:mx-auto sm:text-center">
                    <img src={Logo} alt='aiShiba' className="w-48 mx-auto" />
                    <p className="leading-relaxed mt-2 text-2xl text-white">
                        Your fun, community-driven No. 1 memecoin on the revolutionary Linea Build!
                    </p>
                </div>
                <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0 text-2xl">
                    {
                        footerNavs.map((item, idx) => (
                            <li className="text-sky-500 hover:text-sky-600">
                                <a key={idx} href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-8 items-center justify-between sm:flex flex flex-col">



                    <div className="m-4 ">
                        <ul className="flex items-center space-x-4 ">
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="https://t.me/LineaDOGE_Chat">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> </svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="mt-4 sm:mt-0">
                        &copy; {date} LineaDoge All rights reserved.
                    </div>

                </div>
                <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
            </footer>

        </div>
    )
}

export default Footer