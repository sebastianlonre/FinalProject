import { useContext, useEffect } from "react";
import { ProductContext } from "../../products/context";
import { ColumButtons } from "./ColumButtons";

export const ViewMyProducts = () => {
  const { product, fetchProductsByID } = useContext(ProductContext);

  useEffect(() => {
    fetchProductsByID();
  }, []);

  return (
    <>
      {product.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.productName}</td>
          <td>{product.createdAt}</td>
          <td>{product.updatedAt}</td>
          <td>
            <ColumButtons product={product} />
          </td>
        </tr>
      ))}
    </>
  );
};
