import { Suspense } from "react";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import {
    CoinOverviewFallback,
    TrendingCoinsFallback,
} from "@/components/home/fallback";

// const dummyData: TrendingCoin[] = [
//     {
//         item: {
//             id: "bitcoin",
//             name: "Bitcoin",
//             symbol: "BTC",
//             thumb: "/logo.svg",
//             large: "/logo.svg",
//             market_cap_rank: 1,
//             data: {
//                 price: 80000.0,
//                 price_change_percentage_24h: { usd: 2.5 },
//             },
//         },
//     },

//     {
//         item: {
//             id: "bitcoin",
//             name: "Bitcoin",
//             symbol: "BTC",
//             thumb: "/logo.svg",
//             large: "/logo.svg",
//             market_cap_rank: 1,
//             data: {
//                 price: 80000.0,
//                 price_change_percentage_24h: { usd: -2.5 },
//             },
//         },
//     },
// ];

// const columns: DataTableColumn<TrendingCoin>[] = [
//     {
//         header: "Name",
//         cellClassName: "name-cell",
//         cell: (coin) => {
//             const item = coin.item;
//             return (
//                 <Link href="/coins/${item.id}">
//                     <Image
//                         src={item.large}
//                         alt={item.name}
//                         width={36}
//                         height={36}
//                     />
//                     <p>{item.name}</p>
//                 </Link>
//             );
//         },
//     },
//     {
//         header: "24h Change",
//         cellClassName: "name-cell",
//         cell: (coin) => {
//             const item = coin.item;
//             const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

//             return (
//                 <div
//                     className={cn(
//                         "price-change",
//                         isTrendingUp ? "text-green-500" : "text-red-500"
//                     )}
//                 >
//                     <p>
//                         {isTrendingUp ? (
//                             <TrendingUp width={16} height={16} />
//                         ) : (
//                             <TrendingDown width={16} height={16} />
//                         )}
//                         {`${Math.abs(
//                             item.data.price_change_percentage_24h.usd
//                         ).toFixed(2)}%`}
//                     </p>
//                 </div>
//             );
//         },
//     },
//     {
//         header: "Price",
//         cellClassName: "price-cell",
//         cell: (coin) => formatCurrency(coin.item.data.price),
//     },
// ];

const Page = async () => {
    return (
        <main className="main-container">
            <section className="home-grid">
                <Suspense fallback={<CoinOverviewFallback />}>
                    <CoinOverview />
                </Suspense>

                <Suspense fallback={<TrendingCoinsFallback />}>
                    <TrendingCoins />
                </Suspense>
            </section>

            <section className="w-full mt-7 space-y-4">
                <p>Categories</p>
            </section>
        </main>
    );
};

export default Page;
