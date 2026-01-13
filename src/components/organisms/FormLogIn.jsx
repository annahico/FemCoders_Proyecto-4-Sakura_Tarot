import { Button } from "../atoms/Button"
import { FormInputsLogIn } from "../molecules/FormInputs"

export const FormLogin = () => {
    return (
        <>
            <div className=" bg-[#fde8EE] w-fit z-1 rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col items-center max-h-80% max-w-80%">
                <h1 className="text-[#6a4a4a] text-2xl font-[monserrat] font-semibold p-2">Bienvenida</h1>
                <div>
                    <form action="">
                        <FormInputsLogIn></FormInputsLogIn>
                        <div className=" flex justify-center">
                            <Button buttonname="Iniciar Session"></Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}