const ReviewNotFound = () => {
  return (
    <div>
      <h2>Review not found</h2>
      <p>Could not find requested review</p>
    </div>
  );
};

export default ReviewNotFound;

// Not Found Page
// be default - Next renders a default not found 404 page - but we often want to customize this page - to do this, create a file within the app folder not-found.tsx and export default a new NotFound component
// the page is tied to the file based routing mechanism of the app router
// what is we want to programatically render this page on a certain condition? - we can use the notFound function from Next.js - import notFound function from next/navigation - and if(condition is met) use this function → which will render the not-found.tsx component we prepered in the app folder
// we can also create a not-found.tsx page for different components in their respected folders
