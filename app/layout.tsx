import "../styles/globals.scss"
import Navbar from "../components/sections/navbar"
import SocialBar from "../components/sections/socialBar"
import { AnalyticsWrapper } from "../components/analytics"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='fr'>
			<head />
			<body>
				<Navbar />
				{children}
				<SocialBar />
				<AnalyticsWrapper />
			</body>
		</html>
	)
}

export default RootLayout
