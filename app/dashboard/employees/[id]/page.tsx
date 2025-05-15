import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "../_components/EmployeeCard";
import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import { Form, Image } from "@heroui/react";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import DeleteEmployee from "./_components/DeleteEmployee";

export default async function EmployeePage({
  params,
}: {
  params: { id: string };
}) {
  const responseEmployee = await fetch(`${API_URL}/employees/${params.id}`, {
    headers: {
      ...authHeaders(),
    },
  });
  const employee: Employee = await responseEmployee.json();
  return (
    <div className="w-full h-[90hv] flex flex-row items-center justify-center">
      <EmployeeDataCard employee={employee} />
      <FormUpdateEmployee employee={employee} />
    </div>
  );
}
