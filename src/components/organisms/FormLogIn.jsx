import { Button } from "../atoms/Button";
import { FormInputsLogIn } from "../molecules/FormInputs";
import { useState } from "react";
import { FormTitles } from "../atoms/FormTitles";
import { usersApi } from "../../services/usersApi";

export const FormLogin = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loginUser } = usersApi();

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
      alert("¡Bienvenida " + response.username + "!");

      // Aquí puedes redirigir o guardar sesión
    } catch (error) {
      console.error("❌ Error al iniciar sesión:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <div className=" bg-[#fde8EE] w-fit z-30 rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col items-center max-h-80% max-w-80% fixed top-1/3">
        <h1 className="text-[#6a4a4a] text-2xl font-[monserrat] font-semibold p-2">Bienvenida</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <FormInputsLogIn form={form} handleChange={handleChange}></FormInputsLogIn>
            <div className=" flex justify-center">
              <Button type="submit" buttonname="Iniciar Session"></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
