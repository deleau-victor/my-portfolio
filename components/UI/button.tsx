import React, { FC } from "react"

type buttonProps = {
	children: string | JSX.Element
	variant?: "outlined"
	textColor?: "text-white" | "text-primary"
	bgColor?: "bg-white" | "bg-primary" | "bg-error"
	borderColor?: "border-white" | "border-primary" | "border-error"
	size?: "xs" | "sm" | "lg" | "xl"
	rounded?: "rounded-xs" | "rounded-sm" | "rounded-lg" | "rounded-xl"
	hovered?: boolean
	onClick?: () => void
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
	onClick,
}) => {
	return (
		<button
			className={`button ${variant ? variant : ""} ${textColor} ${
				variant === "outlined" ? "" : bgColor
			} ${borderColor} ${size ? size : ""} ${rounded ? rounded : ""} ${
				hovered ? "hovered" : ""
			}`}
			onClick={() => onClick!()}>
			{children}
		</button>
	)
}

export default Button
