import { IProduct } from "../App"

interface productProps{
    product: IProduct;
    handleAddToCart(id: number): void
}

const Product = ({product, handleAddToCart}: productProps) => {
  return (
    <>
      <h3>{product.product}</h3>
      <button onClick={() => {handleAddToCart(product.id)}}>Add To cart</button>
    </>
  )
}

export default Product
