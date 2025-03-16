import { Button, Input } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="bg-orange-500 px-10 py-2 rounded-md">
            <p className="text-2xl my-4 text-white text-center">Iniciar Sesion<span></span></p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" type="password" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary">Ingresar</Button> 
                <p className="text-white">No tienes una cuenta? <Link href="/signup" className="text-red-600 underline">Registrarse</Link></p>
            </div>
        </div>
    );
}