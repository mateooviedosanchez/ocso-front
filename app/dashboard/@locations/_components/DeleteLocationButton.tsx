import deleteLocation from "@/actions/locations/delete";
import { Button } from "@heroui/react";

export default function DeleteLocationButton({ store }: {store: string | string[] | undefined}) {
    if (!store) return null;
    return (
        <form action={deleteLocation} className="my-4">
            <Button type="submit" name="deleteValue" value={store} color="danger">
                Borrar tienda
            </Button>
        </form>
    )
}