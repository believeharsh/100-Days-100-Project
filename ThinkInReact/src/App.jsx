
import FilterableProductTable from "./Components/FilterableProductTable";

function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Fruits", price: "$1", stocked: true, name: "Banana"},
    {category: "Fruits", price: "$1", stocked: true, name: "Graves"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: false, name: "Lady fingers"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Brinjals"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Bottle gourd"},
   
   
  ];


  return (
 <>
   <FilterableProductTable products={PRODUCTS} />;
 </>
   
  )
}

export default App
