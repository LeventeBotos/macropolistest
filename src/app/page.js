import { getAllProducts } from "./lib/samsoniteapi";
import Link from "next/link";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <main>
      <h1>Samsonite Webshop</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul className="grid grid-cols-4 gap-4 ">
          {products.map((product) => (
            <Link
              className="bg-white flex flex-col gap-2 font-bold shadow-md p-2 text-black rounded-lg "
              key={product.Id}
              href={`/${product.Id}`}
            >
              <img src="bg-black/10 rounded-lg w-full " />
              <p>{product.ProductDescription} </p>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
}
