import React, { Suspense } from 'react'
import CoinOverView from "@/components/home/CoinOverView";
import TrendingCoins from "@/components/home/TrendingCoins";
import { CoinOverviewFallback, TrendingCoinFallback } from '../components/home/Fallback';





const Page = async () => {



    return (
    <main className="main-container">
        <section className="home-grid">


          <Suspense fallback={<CoinOverviewFallback />}>
            <CoinOverView />
          </Suspense>


          <Suspense fallback={<TrendingCoinFallback />}>
            <TrendingCoins />
          </Suspense>


        </section>

        <section>
            <p>category</p>
        </section>
    </main>
    )
}
export default Page
