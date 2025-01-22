'use client';
import { notFound } from 'next/navigation';
import { use } from 'react';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ReviewId = ({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) => {
  const { reviewId, productId } = use(params);
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error('Error loading review');
  //   // this code generates a random error in the runtime
  // }

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      This is a review {reviewId} for product {productId}
    </h1>
  );
};

export default ReviewId;

// Not Found Page
// (...)
// what if we want to programatically render this page on a certain condition? - we can use the notFound function from Next.js - import notFound function from next/navigation - and if(condition is met) use this function → which will render the not-found.tsx component we prepered in the app folder
// we can also create a not-found.tsx page for different components in their respected folders
