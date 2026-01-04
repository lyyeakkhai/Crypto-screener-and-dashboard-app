import DataTable from "@/components/DataTable";
import React from "react";
import {fetcher} from "@/lib/coingecko.action";
import {TrendingUp, TrendingDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { formatCurrency } from '@/lib/utils';
import { TrendingCoinFallback } from '@/components/home/Fallback';

// we need to pass the column data to function
const column : DataTableColumn<TrendingCoin>[] = [
    {
        header: "Name",
        cellClassName: "name-cell",
        cell: (coin) => {
            const item = coin.item;
            return (
                <Link href={
                    `/coins/${item.id}`
                }>
                    <Image src={item.large} alt={item.name} width={36} height={36}/>
                    <p>{item.name}</p>
                </Link>
            );
        }
    },
    {
        header: "24h change ",
        cellClassName: "name-cell",
        cell: (coin) => {
            const item = coin.item;
            const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

            return(
                <div className={cn('price-change', isTrendingUp ? "text-green-500" : "text-red-500")}>
                    {isTrendingUp ? (<TrendingUp width={16} height={16}/>) : (<TrendingDown width={16} height={16}/>)}
                    {item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </div>
            )
        }
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: (coin) => formatCurrency(coin.item.data.price)
    }
]

const TrendingCoins = async () => {
  let coinTrending;

  try{
    coinTrending = await fetcher<{ coins : TrendingCoin[] }>(
      '/search/trending', undefined, 52
    )
  } catch(e) {
    console.error('Error fetching trending coin data:', e);
    return (<TrendingCoinFallback />)
  }


    // Define a dummy dataset for trending coins

    return (
        <div  id="trending-coins">
            <h4> Trending coins</h4>

                <DataTable
                  columns={column}
                  data={coinTrending.coins.slice(0, 6) || []}
                  rowKey={(coin) => coin.item.id}
                  tableClassName="trending-coins-table"

                />

        </div>
    )
}
export default TrendingCoins
