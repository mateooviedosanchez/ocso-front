"use client"

import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Select, SelectItem } from "@heroui/react";
import { response } from "express";

export default async function SelectStoreLocations({stores, defaultStore} : {stores: Location[], defaultStore: number | undefined}) {
    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const locations = await responseLocations.json();
    return (
        <Select label="Tienda" name="location" defaultSelectedKeys={defaultStore ? [String(defaultStore)] : undefined}>
        {
            stores.map((store: Location) => (
                <SelectItem key={String(store.locationId)}>
                    {store.locationName}
                </SelectItem>

            ))
        }
    </Select>
    )

}