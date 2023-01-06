import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { ContactValues } from "../../components/forms/contact/contactForm"
dotenv.config()

const mailContact = (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message }: ContactValues = req.body
	const password = process.env.password
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.ionos.fr",
		auth: {
			user: "contact@deleauvictor.fr",
			pass: password,
		},
		secure: true,
	})
	const mailData = {
		from: email,
		to: "contact@deleauvictor.fr",
		text: name + message,
	}
	transporter.sendMail(mailData, (error, info) => {
		if (error) {
			console.error(error)
			throw new Error()
		} else {
			console.log(info)
		}
	})
	res.status(200)
}

export default mailContact
