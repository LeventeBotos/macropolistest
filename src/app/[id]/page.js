import { getDetailedProduct } from "../lib/samsoniteapi";

export default async function ProductPage({ params }) {
  const product = await getDetailedProduct(params.id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <main>
      <h1>{product.ProductDescription}</h1>
      <p>Collection: {product.Collection}</p>
      <p>Color: {product.Color}</p>
      <p>
        Weight: {product.Weight} {product.WeightUnit}
      </p>
      <p>
        Dimensions: {product.Length}x{product.Width}x{product.Height}{" "}
        {product.DimensionsUnit}
      </p>
      <p>Warranty: {product.Warranty} years</p>
    </main>
  );
}
