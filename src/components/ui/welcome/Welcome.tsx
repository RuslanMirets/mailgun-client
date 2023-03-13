import { useAuth } from "@/hooks/useAuth";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import AuthDialog from "../auth-dialog/AuthDialog";
import { useAuthRedirect } from "./useAuthRedirect";
import styles from "./Welcome.module.scss";

const Welcome: FC = () => {
	// useAuthRedirect();

	const [open, setOpen] = useState(false);
	const toggleAuthDialog = () => {
		setOpen(!open);
	};
	const openAuthDialog = () => {
		toggleAuthDialog();
	};

	const { user } = useAuth();

	const { replace } = useRouter();

	useEffect(() => {
		if (user) {
			replace("/mail");
		}
	}, [user]);

	if (user) return null;

	return (
		<Box className={styles.root}>
			<Container maxWidth="lg">
				<Box className={styles.body}>
					<Typography className={styles.title} variant="h2" component="h1">
						Mailgun App
					</Typography>
					<Box className={styles.buttons}>
						<Button variant="contained" onClick={openAuthDialog}>
							Авторизация
						</Button>
						{/* <Button variant="outlined" onClick={openAuthDialog}>
							Зарегистрироваться
						</Button> */}
					</Box>
				</Box>
			</Container>
			<AuthDialog open={open} onClose={toggleAuthDialog} />
		</Box>
	);
};

export default Welcome;
