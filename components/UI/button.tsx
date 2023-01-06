import React, { FC } from "react"

type buttonProps = {
	children: string | JSX.Element
	variant?: "outlined" | "ghost"
	textColor?: "text-white" | "text-primary"
	bgColor?: "bg-white" | "bg-primary" | "bg-error"
	borderColor?: "border-white" | "border-primary" | "border-error"
	size?: "xs" | "sm" | "lg" | "xl"
	rounded?: "rounded-xs" | "rounded-sm" | "rounded-lg" | "rounded-xl"
	classname?: string
	hovered?: boolean
	onClick: () => void
	type?: "button" | "submit" | "reset"
}

const Button: FC<buttonProps> = ({
	children,
	variant,
	textColor = "text-white",
	bgColor = "bg-primary",
	borderColor = "border-primary",
	size,
	rounded,
	hovered,
	classname,
	onClick,
	type = "button",
}) => {
	return (
		<button
			className={`button ${variant ? variant : ""} ${textColor} ${
				variant === "outlined" ? "" : bgColor
			} ${borderColor} ${size ? size : ""} ${rounded ? rounded : ""} ${
				hovered ? "hovered" : ""
			} ${classname ? classname : ""}`}
			onClick={() => onClick()}
			type={type}>
			{children}
		</button>
	)
}

export default Button
