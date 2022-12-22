import React, { FC, useEffect, useState } from "react"
import Button from "./button"
import Icon from "./icon"
import crossArrow from "../../public/images/icons/cross.svg"
import { createPortal } from "react-dom"

type ModalProps = {
	isOpen: boolean
	onClick: () => void
	children: JSX.Element
	title: string
}

const Modal: FC<ModalProps> = ({ isOpen, onClick, children, title }) => {
	const handleClick = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			onClick()
		}
	}

	return createPortal(
		<div
			className={`${isOpen ? "" : "hidden"} modal-background`}
			onClick={(event) => handleClick(event)}>
			<div className='modal'>
				<div className='head'>
					<h2>{title}</h2>
					<Button
						onClick={onClick}
						rounded='rounded-xs'
						bgColor='bg-error'
						borderColor='border-error'>
						<Icon src={crossArrow} alt='cross' size='xs' />
					</Button>
				</div>
				{children}
			</div>
		</div>,
		document.body,
	)
}

export default Modal
