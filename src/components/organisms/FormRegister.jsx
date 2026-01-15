import { Button } from "../atoms/Button";
import { FormTitles } from "../atoms/FormTitles";
import { ProteccionDatos } from "../atoms/ProteccionDatos";
import { FormInputsRegister } from "../molecules/FormInputs";
import { usersApi } from "../../services/usersApi";
import { useEffect, useState } from "react";
import { AlertDisplay } from "../molecules/alertDisplay";

export const FormRegister = () => {
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
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerUser(form);
      console.log(" Usuario registrado:", response);
      setAlertMessage("¡Registro exitoso! Te estamos redirigiendo a la página....");
    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
      setAlertMessage("Error al registrarse: Inténtalo otra vez! ");
    }
  };
  return (
    <>
      {alertMessage && <AlertDisplay message={alertMessage} />}
      <div className="bg-[#fde8EE] z-1 w-50% rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col">
        <a href="" className="inline-flex items-center font-medium text-[#551A8B] hover:underline">
          iniciar session
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
    </>
  );
};
