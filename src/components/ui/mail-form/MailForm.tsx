import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { MailFormSchema } from "@/utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../FormField";
import styles from "./MailForm.module.scss";

const MailForm: FC = () => {
	const { sendMail } = useActions();
	const { mail } = useTypedSelector((state) => state.mail);

	const methods = useForm({
		mode: "onChange",
		resolver: yupResolver(MailFormSchema),
		defaultValues: {
			email: "",
			subject: "",
			message: "",
		},
	});

	const onSubmit = async (data: any) => {
		await sendMail(data);
	};

	useEffect(() => {
		if (mail) {
			methods.reset({
				email: "",
				subject: "",
				message: "",
			});
		}
	}, [mail]);

	return (
		<>
			<FormProvider {...methods}>
				<form className={styles.root} onSubmit={methods.handleSubmit(onSubmit)}>
					<FormField type="email" label="Email" name="email" />
					<FormField type="text" label="Тема" name="subject" />
					<FormField label="Сообщение" name="message" multiline rows={5} />
					<Button
						variant="contained"
						type="submit"
						disabled={methods.formState.isSubmitting}
					>
						{methods.formState.isSubmitting ? "Отправка..." : "Отправить"}
					</Button>
				</form>
			</FormProvider>
		</>
	);
};

export default MailForm;
