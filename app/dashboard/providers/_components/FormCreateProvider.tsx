import createProvider from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";

export default function FormCreateProvider() {
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0">
            <h1 className="text-2xl text-white"> Crear Proveedor </h1>
            <Input label="Nombre" placeholder="Pecsi" name="providerName"/>
            <Input label="Email" placeholder="business@pecsi.com" name="providerEmail"/>
            <Input label="Numero de telefono" placeholder="684XXXX" name="providerPhoneNumber"/>
            <Button type="submit" color="primary"> Crear Proveedor </Button>
        </form>
    )
}