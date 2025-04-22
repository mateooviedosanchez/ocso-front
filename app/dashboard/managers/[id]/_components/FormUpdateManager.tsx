import updateManager from "@/actions/managers/update"
import { Manager } from "@/entities"
import { Button, Input } from "@heroui/react"
import SelectStore from "./SelectStore"
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"

export default async function FormUpdateManager({ manager }: { manager: Manager }) {
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders(),
        }
    })
    const stores = await responseStores.json()
    return (
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1> Actualizar Manager </h1>
            <Input 
                defaultValue={manager.managerFullName} 
                placeholder="Marco Oviedo" 
                name="managerFullName"
            />
            <Input
                defaultValue={manager.managerEmail}
                placeholder="manager@ocso.com"
                name="managerEmail"
            />
            <Input
                defaultValue={String(manager.managerSalary)}
                placeholder="1234567890"
                name="12999"
            />
            <Input
                defaultValue={manager.managerPhoneNumber}
                placeholder="1234567890"
                name="managerPhoneNumber"
            />       
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId ?? 0} />
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}