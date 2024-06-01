import { useState } from "react"
import Product from "./components/Product";

export interface IProduct{
  id: number;
  product: string;
  price: number;
}

const App = () => {

  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      product: "IPhone",
      price: 350
    },
    {
      id: 2,
      product: "Samsung",
      price: 250
    }
  ])

  function handleAddToCart(id: number) {
    console.log("Clicked", id)
  }

  return (
    <>
      {
        products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>)
      }
    </>
  )
}

export default App
