import Meta from "@/components/ui/Meta";
import Welcome from "@/components/ui/welcome/Welcome";
import { FC } from "react";

const Home: FC = () => {
	return (
		<Meta title="Главная">
			<Welcome />
		</Meta>
	);
};

export default Home;
