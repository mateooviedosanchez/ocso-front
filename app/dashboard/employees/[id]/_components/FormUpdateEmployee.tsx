import updateEmployee from "@/actions/employees/update";
import SelectLocation from "@/app/dashboard/@locations/_components/SelectLocation";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";

export default async function FormUpdateEmployee({
  employee,
}: {
  employee: Employee;
}) {
  const {employeeId} = employee;
  const updateEmployeeById = updateEmployee.bind(null, employeeId);
  const responseLocations = await fetch (`${API_URL}/locations`, {
    headers: {
      ...authHeaders(),
    }
  })
  const locations = await responseLocations.json();
  return (
    <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">

      <Input label="Nombre" name="employeeName" defaultValue="{employee.employeeName}" />
      <Input label="Apellidos" name="employeeLastName" defaultValue="{employee.employeeLastName}" />
      <Input label="Correo Electronico" name="employeeEmail" defaultValue="{employee.employeeEmail}" />
      <Input label="Numero de Telefono" name="employeePhoneNumber" defaultValue="{employee.employeePhoneNumber}" />
      <Input name="employeePhoto" type="file" defaultValue="{employee.employeePhoto}" />
      <SelectLocation locations={locations} store={employee.location?.locationId?.toString()} />
      <Button type="submit" color="primary">
        Actualizar datos
      </Button>
    </form>
  );
}
