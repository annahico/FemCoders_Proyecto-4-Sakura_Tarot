import { useState } from "react";
import { FormLogin } from "../components/organisms/FormLogIn";
import { FormRegister } from "../components/organisms/FormRegister";

export const FormPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full relative">
            {isLogin ? (
                <>
                    <FormLogin />
                    <button 
                        onClick={() => setIsLogin(false)}
                        className="fixed bottom-10 text-[#8b1a65] hover:underline z-50 cursor-pointer bg-white/30 px-4 py-2 rounded-full backdrop-blur-md"
                    >
                        ¿No tienes cuenta? Regístrate aquí
                    </button>
                </>
            ) : (
                <>
                    <FormRegister />
                    <button 
                        onClick={() => setIsLogin(true)}
                        className="fixed bottom-10 text-[#8b1a65] hover:underline z-50 cursor-pointer bg-white/30 px-4 py-2 rounded-full backdrop-blur-md"
                    >
                        ¿Ya tienes cuenta? Inicia sesión
                    </button>
                </>
            )}
        </div>
    );
};