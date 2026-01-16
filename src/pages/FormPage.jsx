// src/pages/FormPage.jsx
import { FormLogin } from "../components/organisms/FormLogIn"
import { FormRegister } from "../components/organisms/FormRegister"

export const FormPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            {/* Eliminamos cualquier prop de éxito, ahora ellos usan navigate */}
            <FormRegister />
            <FormLogin />
        </div>
    )
}