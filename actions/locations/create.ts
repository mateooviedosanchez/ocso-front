"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_NAME, API_URL } from "@/constants";

export async function createLocation(formData: FormData) {
    const token = cookies().get(TOKEN_NAME) ?.value
    if (!token) return null;
    let location: any = {}
    let locationLatLng = [0, 0];
    for (const key of formData.keys()) {
        const value = formData.get(key)
        if (value) {
            if (key === "locationLat") {
                locationLatLng[0] = +value;
            } else if (key === "locationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = formData.get(key);
            }
        }
    }
    location.locationLatLng = locationLatLng;
    axios.post(`${API_URL}/locations`, {
        ... location
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}