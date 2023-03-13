import { useActions } from "@/hooks/useActions";
import { useProfile } from "@/hooks/useProfile";
import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
	const { logout } = useActions();
	const { profile } = useProfile();

	const hadleLogout = () => {
		logout();
	};

	return (
		<header className={styles.root}>
			<Container className={styles.container} maxWidth="md">
				<Box className={styles.body}>
					{profile && (
						<>
							<Typography>
								Вы вошли как <b>{profile.firstName + " " + profile.lastName}</b>
							</Typography>

							<Button variant="contained" onClick={hadleLogout}>
								Выйти
							</Button>
						</>
					)}
				</Box>
			</Container>
		</header>
	);
};

export default Header;
