import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "../../_components/SelectManagers";
import DeleteLocation from "@/actions/locations/delete";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}){
    if (store) return null;
    const token = cookies().get(TOKEN_NAME) ?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const responseLocation = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
    <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
        <h1 className="text-3xl text-white text-center"> Crear Tienda </h1>
        <Input label="Nombre" placeholder="Ocso Jurikiya" name = "LocationName" />
        <Input label="Direccion" placeholder="Av de san trizia" name = "Locationaddres" />
        <Input label="Latitud" placeholder="-120" name = "LocationLat" />
        <Input label="Longitud" placeholder="20" name = "LocationLng" />
        <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
        <Button type="submit" className="primary"> Subir </Button>
    </form>
    );
}