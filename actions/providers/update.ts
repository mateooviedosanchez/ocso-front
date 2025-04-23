"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export default async function updateProvider(providerId: string, formData: FormData) {
    let provider: any = {}
        for (const key of Array.from(formData.keys())) {
            const value = formData.get(key)
            provider[key] = formData.get(key);
        }
        const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "PATCH",
        body: JSON.stringify(provider),
            headers: {
                ...authHeaders(),
                "Content-Type": "application/json",
            },
        })
        if (response.status === 200) {
            revalidateTag("dashboard:providers");
        }
}