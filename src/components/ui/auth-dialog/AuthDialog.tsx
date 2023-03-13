import {
	Dialog,
	DialogTitle,
	Typography,
	IconButton,
	DialogContent,
	DialogActions,
	Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useState } from "react";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import styles from "./AuthDialog.module.scss";

interface IAuthDialog {
	open: boolean;
	onClose: () => void;
}

const AuthDialog: FC<IAuthDialog> = ({ open, onClose }) => {
	const [formType, setFormType] = useState<"login" | "register">("login");

	return (
		<Dialog
			className={styles.root}
			open={open}
			onClose={onClose}
			maxWidth="xs"
			fullWidth
		>
			<DialogTitle>
				<Typography variant="h5" component="div">
					{formType === "login" && "Авторизация"}
					{formType === "register" && "Регистрация"}
				</Typography>
				<IconButton className={styles.close} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent className={styles.content} dividers>
				{formType === "login" && <LoginForm />}
				{formType === "register" && <RegisterForm />}
			</DialogContent>
			<DialogActions className={styles.actions}>
				<Typography variant="body1">
					{formType === "login" && "Нет аккаунта?"}
					{formType === "register" && "Есть аккаунт?"}
				</Typography>
				{formType === "login" && (
					<Button onClick={() => setFormType("register")}>Регистрация</Button>
				)}
				{formType === "register" && (
					<Button onClick={() => setFormType("login")}>Войти</Button>
				)}
			</DialogActions>
		</Dialog>
	);
};

export default AuthDialog;
