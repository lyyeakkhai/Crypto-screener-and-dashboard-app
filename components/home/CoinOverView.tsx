import React from 'react'
import Image from "next/image";
import {formatCurrency} from "@/lib/utils";
import {fetcher} from "@/lib/coingecko.action";
import { CoinOverviewFallback } from '@/components/home/Fallback';

const CoinOverView = async () => {
    let coin;
    try{
        coin = await fetcher<CoinDetailsData>('/coins/bitcoin', {
        dex_pair_format: 'symbol'
      });
    } catch(e) {
       console.error('Error fetching coin data:', e);
       return (<CoinOverviewFallback />)
    }

    return (
        <div id="coin-overview">
            <div className="header">
                <Image
                    src={coin.image.large}
                    alt={coin.name}
                    width={56}
                    height={56}
                />
                <div className="info">
                    <p>{coin.name} /{coin.symbol.toUpperCase()}</p>
                    <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                </div>
            </div>

        </div>
    )
}
export default CoinOverView
