import Hero from '@/features/hero';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Basket from '../components/utility/basket/Basket';
import { loadCategories } from '../lib/load-categories';
import { loadProducts } from '../lib/load-products';

const DynamicCta = dynamic(() => import('@/features/cta'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const DynamicPromo = dynamic(() => import('@/features/promo'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface IHomePage {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: IHomePage) => {
  return (
    <>
      <Head>
        <title>Equal by @sasiogludogucan</title>
      </Head>

      <Basket />
      <Hero />
      <DynamicPromo categories={categories} products={products} />
      <DynamicCta />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await loadCategories();
  const { products } = await loadProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
