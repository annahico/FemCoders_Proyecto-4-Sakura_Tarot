import { Button } from "../atoms/Button"
import { FormTitles } from "../atoms/FormTitles"
import { ProteccionDatos } from "../atoms/ProteccionDatos"
import { FormInputsRegister } from "../molecules/FormInputs"

export const FormRegister = () => {
    return (
        <>
            <div className="bg-[#fde8EE] w-50% rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col">
                <a href="" className="inline-flex items-center font-medium text-[#551A8B] hover:underline">iniciar session</a>
                <FormTitles></FormTitles>
                <div>
                    <form action="">
                        <FormInputsRegister></FormInputsRegister>
                        <ProteccionDatos></ProteccionDatos>
                        <div className=" flex justify-center">
                            <Button buttonname="Registrarse"></Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}