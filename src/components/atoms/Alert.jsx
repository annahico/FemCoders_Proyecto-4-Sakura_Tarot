export const Alert = (props) => {
    return (
        <div className="bg-[#fde8EE] w-50% rounded-2xl pl-10 pr-10 pt-5 pb-5 flex flex-col items-center">
            <p>{props.alertmessage}</p>
        </div>
    )
}