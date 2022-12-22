import { ErrorMessage, Field } from "formik"
import React, { FC, MouseEvent, useState } from "react"
import Icon from "../UI/icon"

type Props = {
	name: string
	icon?: string
	wide?: boolean
	type?: string
	placeholder?: string
	as?: "input" | "textarea"
}

const InputField: FC<Props> = ({
	name,
	icon,
	wide,
	type = "text",
	placeholder,
	as = "input",
}) => {
	const handleFocus = (event: MouseEvent<HTMLDivElement>) => {
		let input: HTMLInputElement
		input = event.currentTarget.children[0].children[0] as HTMLInputElement
		input.focus()
	}

	return (
		<section className={`inputSection ${wide ? "wide" : ""}`}>
			<div className='fieldSection' onClick={(event) => handleFocus(event)}>
				<div className='fieldInput'>
					<Field
						as={as}
						type={type}
						id={name}
						name={name}
						className='fieldComponent'
						rows={8}
						placeholder={
							placeholder ? placeholder : `Entrez votre ${name}`
						}
					/>
				</div>
				{icon && (
					<div className='fieldIcon'>
						<Icon src={icon} alt={`icone ${name}`}></Icon>
					</div>
				)}
			</div>
			<div>
				<ErrorMessage name={name} component='small' />
			</div>
		</section>
	)
}

export default InputField
