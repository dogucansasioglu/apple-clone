import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HomeHero from '../components/heroes/home/HomeHero';
import Promo from '../components/Promo/Promo';
import Basket from '../components/utility/basket/Basket';
import { loadCategories } from '../lib/load-categories';
import { loadProducts } from '../lib/load-products';

const DynamicCta = dynamic(() => import('../components/cta/Cta'), {
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
        <title>Apple Clone</title>
      </Head>

      <Basket />
      <HomeHero />
      <Promo categories={categories} products={products} />
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
