const Input = ({
	type = "text",
	placeholder = "",
	label = "",
	containerStyle = "",
	inputStyles = "",
	value,
	name = "",
	onChange,
	required = false,
	onEnterPress,
	checked = false,
}) => {
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			onEnterPress && onEnterPress();
		}
	};

	return (
		<div className={`w-full flex flex-col ${containerStyle}`}>
			{label && (
				<label htmlFor="">
					{label} {required && <span className="text-red-600">*</span>}
				</label>
			)}

			<input
				onKeyDown={handleKeyDown}
				checked={checked}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				name={name}
				className={`w-full px-[4px] py-[6px] border cursor-pointer border-black rounded-md ${inputStyles}`}
				type={type}
			/>
		</div>
	);
};

export default Input;
