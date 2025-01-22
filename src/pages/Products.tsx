import React, { useEffect, useState } from "react";
import { Product } from "../types/Product";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((a) => setProducts(a));
  }, []);

  // ----------------Add to Cart--------------------

  const addToCart = (item: Product) => {
    console.log(item.id);
    const findthisitem = products.find(
      (currentproduct) => currentproduct.id === item.id
    );
    console.log(findthisitem);

    const updatedList = products.map((currentProduct) =>
      currentProduct.id === item.id
        ? { ...currentProduct, isAdded: true }
        : currentProduct
    );

    console.log(updatedList);

    const findthisitemAfter = products.find(
      (currentproduct) => currentproduct.id === item.id
    );
    console.log(findthisitemAfter);

    setProducts(updatedList);
  };

  // -----------------------------------------------

  return (
    <div>
      <div className="grid grid-cols-4 m-5 p-5 bg-slate-100 gap-5">
        {products.map((item, index) => (
          <ul
            key={index}
            className="border border-solid bg-white p-5 hover:shadow-2xl relative"
          >
            <img src={item.image} alt="" className="w-1/2 place-self-center" />
            <li className="">
              <div className="relative group">
                <div className="truncate w-48">{item.title}</div>

                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-slate-600 text-white text-xs p-1 max-w-xs w-auto">
                  {item.title}
                </div>
              </div>
            </li>
            <li className="font-thin">{item.description}</li>
            {/* <li>{item.category}</li> */}
            <li className="font-bold text-l">£{item.price}</li>
            <li>{item.rating.count}</li>
            {/* <li>{item.isaddded}</li> */}

            {!item.isaddded ? (
              <div className="grid justify-end ">
                <button
                  className="border border-solid bg-orange-300 p-3 bottom-2 right-2 absolute text-white hover:bg-slate-700 hover:text-white hover:shadow-xl"
                  onClick={() => addToCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            ) : (
              <div className="grid justify-end ">
                <button className="border border-solid bg-orange-300 p-3 bottom-2 right-2 absolute text-white hover:bg-slate-700 hover:text-white hover:shadow-xl">
                  REMOVE FROM CART
                </button>
              </div>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Products;
