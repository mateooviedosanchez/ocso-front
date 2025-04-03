import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "../../_components/SelectManagers";

export default async function FormNewLocation(){
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
    <form action={createLocation}>
        <Input label="Nombre" placeholder="Ocso Jurikiya" name = "LocationName" />
        <Input label="Direccion" placeholder="Av de san trizia" name = "Locationaddres" />
        <Input label="Latitud" placeholder="-120" name = "LocationLat" />
        <Input label="Longitud" placeholder="20" name = "LocationLng" />
        <SelectManager managers={responseManagers.data} locations={responseLocation.data} />
        <Button type="submit"> Subir </Button>
    </form>
    );
}