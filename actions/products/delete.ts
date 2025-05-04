"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteProduct(productId: string, formData: FormData) {
    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders(),
            "Content-Type": "application/json",
        },
    })
    if (response.status === 200) {
        revalidateTag("dashboard:products");
        redirect("/dashboard/products");
    }
}