"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formData: FormData) {
    const cleadData = new FormData();
    for (const [key, value] of Array.from(formData.entries())) {
        if (!key.startsWith("$")) {
            cleadData.append(key, value);
        }
    }
    const response = await fetch (`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ...authHeaders(),
        },
        body: formData,
    })
    if (response.status === 200) revalidateTag("dashboard:employees");
    if (response.status === 200) revalidateTag(`dashboard:employees:${employeeId}`);
    return;
}