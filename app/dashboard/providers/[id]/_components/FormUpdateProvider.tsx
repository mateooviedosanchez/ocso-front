import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";

export default function FormUpdateProvider ({provider}: {provider: Provider}) {
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId);
    return (
        <>
        <h1 className="text-xl px-2"> Actualizar datos </h1>
        <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
                <Input className="max-2-[250px]" defaultValue={provider.providerName} label="Nombre" placeholder="Pecsi" name="providerName"/>
                <Input className="max-2-[250px]" defaultValue={provider.providerEmail} label="Email" placeholder="business@pecsi.com" name="providerEmail"/>
                <Input className="max-2-[250px]" defaultValue={provider.providerPhoneNumber} label="Numero de telefono" placeholder="684XXXX" name="providerPhoneNumber"/>
                <Button type="submit" color="primary"> Actualizar </Button>
        </form>
        </>
    )
}