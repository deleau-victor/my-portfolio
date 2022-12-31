import React, { FC, useEffect, useState } from "react"
import Image from "next/image"

type IconProps = {
	size?: "xs" | "sm" | "lg" | "xl"
	src: string
	alt: string
	responsive?: boolean
}

const Icon: FC<IconProps> = ({ size, src, alt, responsive }) => {
	return (
		<div
			className={`relative icon ${size ? size : ""} ${
				responsive ? "responsive" : ""
			}`}>
			<Image
				src={src}
				alt={alt}
				width={45}
				height={45}
				sizes='min-width: 8px, max-width: 40px'
			/>
		</div>
	)
}

export default Icon
