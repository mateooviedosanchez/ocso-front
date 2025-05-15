import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import SelectLocation from "../../@locations/_components/SelectLocation";

export default async function FormCreateEmployee() {
    const responseLocations = await fetch (`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const locations = await responseLocations.json();
  return (
    <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
      <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco"/>
      <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Oviedo"/>
      <Input isRequired={true} label="Correo Electronico" name="employeeEmail" placeholder="oviedito@gmail.com"/>
      <Input isRequired={true} label="Numero de Telefono" name="employeePhoneNumber" placeholder="444XXXXX"/>
      <Input type="file" name="employeePhoto"/>
      <SelectLocation locations={locations} store={undefined} />
      <Button type="submit" color="primary">
        Crear Empleado
      </Button>
    </form>
  );
}
