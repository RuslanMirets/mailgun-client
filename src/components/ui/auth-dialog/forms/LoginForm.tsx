import { Button } from "@mui/material";
import { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "../../FormField";
import { LoginFormSchema } from "@/utils/validation";
import { useActions } from "@/hooks/useActions";

const LoginForm: FC = () => {
	const { login } = useActions();

	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(LoginFormSchema),
	});

	const onSubmit = async (data: any) => {
		await login(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
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
					{methods.formState.isSubmitting ? "Вход..." : "Войти"}
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
