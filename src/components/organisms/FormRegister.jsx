import { Button } from "../atoms/Button";
import { FormTitles } from "../atoms/FormTitles";
import { ProteccionDatos } from "../atoms/ProteccionDatos";
import { FormInputsRegister } from "../molecules/FormInputs";
import { usersApi } from "../../services/usersApi";
import { Activity, useEffect, useState } from "react";
import { AlertDisplay } from "../molecules/alertDisplay";
import { FormLogin } from "./FormLogIn";
import { useNavigate } from "react-router-dom"; // 1. Importa el hook

export const FormRegister = () => { // 2. Ya no recibe onSuccess
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // 3. Inicializa el navegador

  const handleClick = () => {
    setShowLogin(true);
  };

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const { registerUser } = usersApi();

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(form);
      console.log(" Usuario registrado:", response);
      setAlertMessage("¡Registro exitoso! Te estamos redirigiendo a la página....");
      
      // 4. Cambia onSuccess por la navegación real al tarot
      setTimeout(() => {
        navigate("/tarot"); 
      }, 2000);

    } catch (error) {
      console.error("❌ Error al registrarse:", error);
      setAlertMessage("Error al registrarse: Inténtalo otra vez! ");
    }
  };

  return (
    <>
      {alertMessage && <AlertDisplay message={alertMessage} />}
      {showLogin ? (
        <FormLogin /> // 5. Ya no pasa la prop onSuccess
      ) : (
        <Activity mode="visible">
          <div className="bg-[#fde8EE] z-20 rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col fixed top-1/3">
            <a onClick={handleClick} className="inline-flex items-center font-medium text-[#551A8B] hover:underline cursor-pointer">
              Iniciar Session
            </a>
            <FormTitles></FormTitles>
            <div>
              <form onSubmit={handleSubmit}>
                <FormInputsRegister form={form} handleChange={handleChange}></FormInputsRegister>
                <ProteccionDatos></ProteccionDatos>
                <div className=" flex justify-center">
                  <Button type="submit" buttonname="Registrarse"></Button>
                </div>
              </form>
            </div>
          </div>
        </Activity>
      )}
    </>
  );
};