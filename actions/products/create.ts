"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { form } from "@heroui/react";
import { revalidateTag } from "next/cache";

export default async function createProduct(formData: FormData) {
    let product: any = {}
    for (const key of Array.from(formData.keys())) {
        const value = formData.get(key)
        if (!key.includes("$ACTION_ID")) {
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price;
    product.countSeal = +product.countSeal;
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            ...authHeaders(),
            "Content-Type": "application/json",
        },
    })
    if (response.status === 201) {
        revalidateTag("dashboard:products");
    }
}