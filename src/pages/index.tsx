import { GetServerSideProps } from 'next';
import Head from 'next/head';
import HomeHero from '../components/heroes/home/HomeHero';
import Promo from '../components/Promo/Promo';
import Basket from '../components/utility/basket/Basket';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';

interface IHomePage {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: IHomePage) => {
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <meta
          name="description"
          content="Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Basket />

      <HomeHero />

      <Promo categories={categories} products={products} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomePage> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  if (!categories || !products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      categories,
      products,
    },
  };
};
