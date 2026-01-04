import React, { Suspense } from 'react'
import CoinOverView from "@/components/home/CoinOverView";
import TrendingCoins from "@/components/home/TrendingCoins";
import { CoinOverviewFallback, TrendingCoinFallback } from '../components/Fallback';





const Page = async () => {



    return (
    <main className="main-container">
        <section className="home-grid">

          {/* Updated Suspense to use CoinOverviewFallback */}
          <Suspense fallback={<CoinOverviewFallback />}>
            <CoinOverView />
          </Suspense>

          {/* Updated Suspense to use TrendingCoinFallback */}
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
