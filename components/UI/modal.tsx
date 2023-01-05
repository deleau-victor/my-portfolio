"use client"

import React from "react"
import Button from "./button"
import Icon from "./icon"
import crossArrow from "../../public/images/icons/cross.svg"
import { createPortal } from "react-dom"

type ModalProps = {
	isOpen: boolean
	onClick: () => void
	children: JSX.Element
	title: string | JSX.Element
	size?: "xs" | "sm" | "lg" | "xl"
}

const Modal = ({ isOpen, onClick, children, title, size }: ModalProps) => {
	const handleClick = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			onClick()
		}
	}

	const content = (
		<>
			{isOpen && (
				<div
					className='modal-background'
					onClick={(event) => handleClick(event)}>
					<div className={`modal ${size}`}>
						<div className='head'>
							<>
								{typeof title === "string" ? <h2>{title}</h2> : title}
								<Button
									onClick={onClick}
									rounded='rounded-xs'
									bgColor='bg-error'
									borderColor='border-error'>
									<Icon src={crossArrow} alt='cross' size='xs' />
								</Button>
							</>
						</div>
						{children}
					</div>
				</div>
			)}
		</>
	)

	if (typeof document !== "undefined") {
		return createPortal(content, document.body)
	}
	return null
}

export default Modal
