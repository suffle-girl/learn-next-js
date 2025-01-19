const Dashboard = () => {
  return <h1>This a dashboard</h1>;
};

export default Dashboard;

// File Colocation
// a route isn't publicly accessible until a page.js or page.tsx is added to the respected route segment
// and even when the route becomes publicly accessible, it will return only content which is returned by page.tsx + it must be a default exported react component
// colocating is safe - but it is not mandatory, the files can be kept outside the app directory within the source folder eg. having a separate components folder - perfectly valid approach
