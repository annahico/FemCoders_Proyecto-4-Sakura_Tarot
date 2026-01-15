import { Button } from "../atoms/Button";
import { FormTitles } from "../atoms/FormTitles";
import { ProteccionDatos } from "../atoms/ProteccionDatos";
import { FormInputsRegister } from "../molecules/FormInputs";
import { usersApi } from "../../services/usersApi";
import { useState } from "react";

export const FormRegister = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { registerUser } = usersApi();

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
      alert("Login Exitoso");
    } catch (error) {
      "X error al registro", error;
    }
    alert("error");
  };
  return (
    <>
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
