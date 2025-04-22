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
        <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col gap-2 p-4">
            <h1> Actualizar Manager </h1>
            <Input 
                required={true}
                label="Nombre del manager"
                defaultValue={manager.managerFullName} 
                placeholder="Marco Oviedo" 
                name="managerFullName"
            />
            <Input
                required={true}
                label="Email del manager"
                defaultValue={manager.managerEmail}
                placeholder="manager@ocso.com"
                name="managerEmail"
            />
            <Input
                required={true}
                label="Salario del manager"
                defaultValue={String(manager.managerSalary)}
                placeholder="14000"
                name="managerSalary"
            />
            <Input
                required={true}
                label="Telefono del manager"
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