import * as Yup from "yup"

const ContactSchema = Yup.object().shape({
	name: Yup.string()
		.max(30, "Votre nom doit comporter 50 caractères au maximum")
		.required("Ce champ est obligatoire"),
	email: Yup.string()
		.email("L'email indiqué est invalide")
		.required("Ce champ est obligatoire"),
	message: Yup.string()
		.required("Ce champ est obligatoire")
		.max(255, "La longueur maximale du message est de 255 caractères"),
})

export const InitialValues = {
	name: "",
	email: "",
	message: "",
}

export default ContactSchema
