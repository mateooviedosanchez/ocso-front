import { authHeaders } from "@/helpers/authHeaders";
import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";


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
      <FormUpdateEmployee employee={employee} />
    </div>
  );
}
