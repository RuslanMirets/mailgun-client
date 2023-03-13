import { useActions } from "@/hooks/useActions";
import { RegisterFormSchema } from "@/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../../FormField";

const RegisterForm: FC = () => {
	const { register } = useActions();

	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(RegisterFormSchema),
	});

	const onSubmit = async (data: any) => {
		await register(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<FormField type="text" label="Имя" name="firstName" />
				<FormField type="text" label="Фамилия" name="lastName" />
				<FormField type="email" label="Email" name="email" />
				<FormField type="password" label="Пароль" name="password" />
				<Button
					disabled={
						!methods.formState.isValid || methods.formState.isSubmitting
					}
					type="submit"
					color="primary"
					variant="contained"
				>
					{methods.formState.isSubmitting
						? "Регистрация..."
						: "Зарегистрироваться"}
				</Button>
			</form>
		</FormProvider>
	);
};

export default RegisterForm;
