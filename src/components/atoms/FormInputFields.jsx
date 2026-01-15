export const FormInputFields = (props) => {
  return <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.inputname} required={props.required} className="text-[#6a4a4a] font-[Cormorant Garamond] bg-white rounded-lg p-2 pl-5" />;
};
