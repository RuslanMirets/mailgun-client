import MailForm from "@/components/ui/mail-form/MailForm";
import Meta from "@/components/ui/Meta";
import { useAuth } from "@/hooks/useAuth";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import styles from "./Mail.module.scss";

const Mail: FC = () => {
	const { user } = useAuth();

	const { replace } = useRouter();

	useEffect(() => {
		if (!user) {
			replace("/");
		}
	}, [user]);

	if (!user) return null;

	return (
		<Meta title="Mail">
			<Box className={styles.root}>
				<Container maxWidth="md">
					<Box className={styles.body}>
						<Typography className={styles.title} variant="h2" component="h1">
							Send mail
						</Typography>
						<Paper className={styles.paper}>
							<MailForm />
						</Paper>
					</Box>
				</Container>
			</Box>
		</Meta>
	);
};

export default Mail;
