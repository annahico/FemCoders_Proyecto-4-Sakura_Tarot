import { Button } from "../atoms/Button";
import { FormInputsLogIn } from "../molecules/FormInputs";
import { useEffect, useState } from "react";
import { usersApi } from "../../services/usersApi";
import { AlertDisplay } from "../molecules/alertDisplay";

// Pasamos onSuccess como prop para activar el cambio de pantalla en App.jsx
export const FormLogin = ({ onSuccess }) => { 
  const [form, setForm] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const { loginUser } = usersApi();

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage("");
      }, 2000);
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
      const response = await loginUser(form.email, form.password);
      console.log("✅ Login exitoso:", response);
      setAlertMessage("¡Bienvenida " + response.username + "!");
      
      // En lugar de navigate, usamos la función onSuccess que viene de App.jsx
      setTimeout(() => {
        if (onSuccess) onSuccess(); 
      }, 2000);

    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
      setAlertMessage("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <>
      {alertMessage && <AlertDisplay message={alertMessage} />}
      <div className="bg-[#fde8EE] w-fit z-30 rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col items-center fixed top-1/3">
        <h1 className="text-[#6a4a4a] text-2xl font-semibold p-2">Bienvenida</h1>
        <form onSubmit={handleSubmit}>
          <FormInputsLogIn form={form} handleChange={handleChange} />
          <div className="flex justify-center">
            <Button type="submit" buttonname="Iniciar Session" />
          </div>
        </form>
      </div>
    </>
  );
};