import { notFound } from 'next/navigation';

const ReviewId = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      This is a review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewId;

// Not Found Page
// (...)
// what is we want to programatically render this page on a certain condition? - we can use the notFound function from Next.js - import notFound function from next/navigation - and if(condition is met) use this function → which will render the not-found.tsx component we prepered in the app folder
// we can also create a not-found.tsx page for different components in their respected folders
