import Products from "./components/products/Products";
import Persons from "./components/persons/Persons";

const App = () => {

  const products = ["table","couch","chair1","chair2"];
  const names = ["Parker","Simmons","Lewis","Poe"];

  return (
    <>
      <Products productsArray={products}/>
      <Persons namesArray={names}/>
    </>
  )
  
};

export default App;
