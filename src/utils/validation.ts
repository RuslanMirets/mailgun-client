import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
	email: yup.string().email("Некорректная почта").required("Введите почту"),
	password: yup
		.string()
		.min(6, "Пароль должен быть не менее 6 символов")
		.required("Введите пароль"),
});

export const RegisterFormSchema = yup
	.object()
	.shape({
		firstName: yup.string().required("Введите имя"),
		lastName: yup.string().required("Введите фамилию"),
	})
	.concat(LoginFormSchema);

export const MailFormSchema = yup.object().shape({
	email: yup.string().email("Некорректная почта").required("Введите почту"),
	subject: yup.string().required("Введите тему"),
	message: yup.string().required("Введите сообщение"),
});
