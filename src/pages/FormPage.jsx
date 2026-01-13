import { FormLogin } from "../components/organisms/FormLogIn"
import { FormRegister } from "../components/organisms/FormRegister"

export const FormPage = () => {
    return (
        
        <div className="flex justify-center items-center content-center ">
            <FormRegister></FormRegister>
            <FormLogin></FormLogin>
        </div>
    )
}