import { FormInputFields } from "../atoms/FormInputFields"

export const FormInputsRegister = () => {
    return (
        <>
            <p className="text-[#6a4a4a] font-[Cormorant Garamond] font-semibold pt-2 pb-2"> Ingresa tus datos: </p>
            <div className="flex gap-2 flex-col w-60%">
                <FormInputFields inputname="Nombre"></FormInputFields>
                <FormInputFields inputname="Email"></FormInputFields>
                <FormInputFields inputname="Password"></FormInputFields>
            </div>
        </>

    )
}

export const FormInputsLogIn = () => {
    return (
        <>
            <p className="text-[#6a4a4a] font-[Cormorant Garamond] font-semibold pt-2 pb-2"> Ingresa tus datos: </p>
            <div className="flex gap-2 flex-col w-60%">
                <FormInputFields inputname="Email"></FormInputFields>
                <FormInputFields inputname="Password"></FormInputFields>
            </div>
        </>

    )
}