import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Tab } from '@headlessui/react';
import Categories from './categories/Categories';
import Products from './products/Products';

export interface IPromo {
  products: Product[];
  categories: Category[];
}

const Promo = ({ products, categories }: IPromo) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <section className="relative z-40 -mt-[100vh] min-h-screen bg-promo-dark">
      <div className="space-y-10 py-16">
        <h1 className="text-center text-4xl font-medium tracking-wide text-white">
          New Promos
        </h1>

        <Tab.Group>
          <Tab.List className="flex justify-center">
            <Categories categories={categories} />
          </Tab.List>
          <Tab.Panels
            className="mx-auto max-w-fit pt-10 pb-24 sm:px-4"
            ref={parent}
          >
            <Products categories={categories} products={products} />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Promo;
