import Products from "./components/products/Products";

const App = () => {

  const products = ["table","couch","chair1","chair2"];

  return <Products productArray={products}/>;
};

export default App;
