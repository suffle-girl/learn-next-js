const PrivateRoute = () => {
  return <h1>You cannot view this in the browser.</h1>;
};

export default PrivateRoute;

// Private Folders
// a feature to help us effectively organize our project
// private folder indicates that is a private impementation detail and shopuld not be considered by the routing system
// the folder and all its subfolders are excluded from routing
// how - prefic the folder name with an underscore
// what are they good for 1) separating UI logic from routing logic, 2) consistently organizing internal files across a project, 3) sorting and grouping files in code editors, 4 avoiding potential naming conflicts with the future Next file conventions
// for including an underscore in URL segments - prefix folder name with "%5F"
// though these can be put outside of the app folder altogether to avoid gunking the code
