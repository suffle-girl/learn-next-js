'use client';
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
    router.push('/');
  };
  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProduct;

// Programmatical navigation
// for example placing an order redirect the user to the order confirmation
// for this, we use the useRouter hook - also works only with client components - so "use client"; at the top of the page
// router.push("/") - can take the user back to whichever specified href url in the "" - even nested or catch all routes
// router.replace() - similar use as using it in the Link component, to clear the history
// router.back() - to take the user back
// router.forward() - to navigate the user one page forward
