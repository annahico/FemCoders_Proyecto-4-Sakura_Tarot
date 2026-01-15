export const Alert = (props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#fde8EE] w-50% rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col items-center">
        <p className="text-[#6a4a4a] text-xl font-[Cormorant Garamond] text-center">{props.alertmessage}</p>
      </div>
    </div>
  );
};
