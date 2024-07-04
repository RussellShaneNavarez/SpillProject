import { FC } from "react";

interface ButtonProps {
	label: string;
	secondary?: boolean;
	fullWidth?: boolean;
	large?: boolean;
	onClick: () => void;
	disabled?: boolean;
	outline?: boolean;
}

const Button: FC<ButtonProps> = ({
	label,
	secondary,
	fullWidth,
	large,
	onClick,
	disabled,
	outline,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
		font-semibold
        rounded-full
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? "w-full" : "w-fit"}
        ${secondary ? "bg-white" : "bg-violet-600"}
        ${secondary ? "text-black" : "text-white"}
        ${secondary ? "border-black" : "border-violet-600"}
        ${large ? "text-xl" : "text-md"}
        ${large ? "px-5 py-3" : "px-4 py-2"}
        ${outline ? "bg-transparent" : ""}
        ${outline ? "border-white" : ""}
        ${outline ? "text-white" : ""}
      `}
		>
			{label}
		</button>
	);
};

export default Button;
