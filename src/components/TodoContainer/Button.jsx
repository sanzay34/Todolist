const Button = ({
	children,
	fullWidth = false,
	handleClick,
	extraStyles = "",
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={handleClick}
			className={`px-[8px] ${
				fullWidth ? "w-full" : ""
			}  py-[5px] disabled:pointer-events-none  cursor-pointer text-[15px] border border-black rounded-md shadow-sm hover:bg-slate-100 ${extraStyles}`}
		>
			{children}
		</button>
	);
};

export default Button;
