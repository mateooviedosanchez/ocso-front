import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProviderCard ({provider}: {provider: Provider}) {
    return (
        <Card className="w-full min-w-[350px] max-w-[350px]">
            <CardHeader>
                <b>
                    {provider.providerName}
                </b>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p> Correo Electronico: </p><b>{provider.providerEmail}</b>
                <p> Numero de telefono: </p><b>{provider.providerPhoneNumber}</b>
                {provider?.products?.length !== 0 ? (
                    <p>
                        Tiene <b>{provider?.products?.length}</b> producto{provider.products.length > 1 ? "s" : ""}:
                    </p>
                ) : (
                    <p>No tiene productos</p>
                )}
            </CardBody>
        </Card>
    )
}