'use client';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error('Error loading product');
    // this code generates a random error in the runtime
  }

  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
};

export default ProductDetailsLayout;

// Nested Layouts
// layouts can of course be nested - it works in a way that the root layout gets rendered and then the layout for the component → the resulting page as a footer and a header and inside it, there is a layout for eg. products
// this allows us to create layouts that apply only to a specific areas of our application
