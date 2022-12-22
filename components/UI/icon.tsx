import React, { FC, useEffect, useState } from "react"
import Image from "next/image"

type IconProps = {
	size?: "xs" | "sm" | "lg" | "xl"
	src: string
	alt: string
}

const Icon: FC<IconProps> = ({ size, src, alt }) => {
	return (
		<div className={`relative icon ${size ? size : ""}`}>
			<Image src={src} alt={alt} fill></Image>
		</div>
	)
}

export default Icon
