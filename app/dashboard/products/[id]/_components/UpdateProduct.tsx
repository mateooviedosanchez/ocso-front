import { Product, Provider } from "@/entities";
import updateProduct from "@/actions/products/update";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({
  product,
  providers,
}: {
  product: Product;
  providers: Provider[];
}) {
  const { productId } = product;
  const updateProductById = updateProduct.bind(null, product.productId);
  return (
    <form action={updateProductById} className="p-10 flex flex-col gap-4">
      <Input
        name="productName"
        label="Nombre"
        defaultValue={product.productName}
      />
      <Input
        name="countSeal"
        label="Num. de Sellos"
        defaultValue={String(product.countSeal)}
      />
      <Input name="price" label="Precio" defaultValue={String(product.price)} />
      <SelectProvider
        providers={providers}
        defaultProvider={product.productId}
      />
      <div>
        <Button
          type="submit"
          color="primary"
          className="flex flex-row flex-grow-0"
        >
          {" "}
          Guardar cambios <LuCheck size="20" className="text-white" />
        </Button>
      </div>
    </form>
  );
}
