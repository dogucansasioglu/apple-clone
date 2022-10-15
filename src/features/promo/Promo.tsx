import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Tab } from '@headlessui/react';
import PromoCategories from './PromoCategories';
import PromoProducts from './PromoProducts';

export interface IPromo {
  products: Product[];
  categories: Category[];
}

export default function Promo({ products, categories }: IPromo) {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <section className="relative z-30 -mt-[100vh] min-h-screen space-y-10 bg-promo-dark py-16">
      <h1 className="text-center text-4xl font-medium tracking-wide text-white">
        New Promos
      </h1>

      <Tab.Group>
        <Tab.List className="flex justify-center">
          <PromoCategories categories={categories} />
        </Tab.List>
        <Tab.Panels
          className="mx-auto max-w-fit pt-10 pb-24 sm:px-5"
          ref={parent}
        >
          <PromoProducts categories={categories} products={products} />
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
