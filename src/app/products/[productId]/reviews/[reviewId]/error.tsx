'use client';

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <h1>{error.message}</h1>;
};

export default ErrorBoundary;

// error.tsx - without it, we get some error in the dev mode, but when trying to run it in production mode, one error in a deeply nested component results in crush of the whole application
// better approach - handle the error gracefully affecting only the concerned segment while keeping the rest of the application functional
// add error.tsx simply to the folder and export default the component + it needs to be a client component again
// ideally the error page would have a UI matching the application theme
// error.tsx does:
// automatically wrap a route segment and its nested children in a React Error Boundary
// create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
// isolate errors to affected segments while keeping the rest of the application functional
// add functionality to attempt to revover from error withou a ful page reload
