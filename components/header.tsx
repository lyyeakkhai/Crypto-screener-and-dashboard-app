'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import { cn } from '@/lib/utils'

const Header = () => {
    // when we want to know which navigation is active
    // because nextjs by default is sever side render so it can not interact with browser
    // we need to turn it to client side rendering to interact with broswer
    // then we can use usePathname hook to get the current pathname url so we can specific the active class for the current navigation button
    const pathname = usePathname(); // get current pathname url

    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <img src="/logo.svg" alt="CoinPulse" width={132} height={40}
                    />
                </Link>

                <nav>
                    <Link href="/" className={cn('nav-link', {'is-active': pathname === '/', 'is-home':true})} >Home</Link>
                    <p>Search</p>
                    <Link href="/coins" className={cn('nav-link', {'is-active': pathname === '/coins'})}>All Coins</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header
