import Head from 'next/head'
import axios from '@/lib/axios'

import Footer from '@/components/footer'
import FeatureSection from '@/components/feature-section'
import CollectionSection from '@/components/collection-section'
import FeaturedSection from '@/components/featured-section'
import CategorySection from '@/components/category-section'
import Navbar from '@/components/navbar/navbar'
import TrendingProductsSection from '@/components/trending-products-section'

import { ProductInterface } from '@/interfaces'

interface Props {
    data: {
        products: ProductInterface[]
    }
}

export default function Home({ data }: Props) {
    return (
        <>
            <Head>
                <title>Geek Store</title>
                <meta name="description" content="Your best geek store" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-white">
                {/* Hero section */}
                <div className="relative bg-gray-900">
                    {/* Decorative image and overlay */}
                    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

                    {/* Navigation */}
                    <Navbar />

                    <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
                        <p className="mt-4 text-xl text-white">
                            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
                            while they're still in stock.
                        </p>
                        <a
                            href="#"
                            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                            Shop New Arrivals
                        </a>
                    </div>
                </div>

                <main>
                    <CategorySection />
                    <TrendingProductsSection data={data.products} />
                    <FeaturedSection />
                    <CollectionSection />
                    <FeatureSection />
                    <Footer />
                </main>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`/trending-products`);
    const data = res.data

    return {
        props: {
            data
        },
    };
}
