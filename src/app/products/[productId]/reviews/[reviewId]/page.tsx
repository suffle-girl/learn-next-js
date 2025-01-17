const ReviewId = ({
  params,
}: {
  params: { reviewId: string; productId: string };
}) => {
  return (
    <h1>
      This is a review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewId;
