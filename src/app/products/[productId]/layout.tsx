const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
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
