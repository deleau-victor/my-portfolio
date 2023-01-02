"use client"

import React, { FC, useEffect, useState } from "react"
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

const Modal: FC<ModalProps> = ({ isOpen, onClick, children, title, size }) => {
	const handleClick = (event: React.MouseEvent) => {
		if (event.target === event.currentTarget) {
			onClick()
		}
	}

	if (typeof document !== "undefined") {
		return createPortal(
			<>
				{isOpen && (
					<div
						className='modal-background'
						onClick={(event) => handleClick(event)}>
						<div className={`modal ${size}`}>
							<div className='head'>
								<>
									{typeof title === "string" ? (
										<h2>{title}</h2>
									) : (
										title
									)}
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
			</>,
			document.body,
		)
	}
	return <div></div>
}

export default Modal
