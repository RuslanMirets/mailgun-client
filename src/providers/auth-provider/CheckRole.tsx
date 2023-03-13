import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import { TypeComponentsAuthFields } from "./auth-page.types";

const CheckRole: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
	Component: { isOnlyUser },
	children,
}) => {
	const { user } = useAuth();

	const router = useRouter();

	if (user && isOnlyUser) {
		return <>{children}</>;
	}

	router.pathname !== "/auth" && router.replace("/auth");
	return null;

	// if (!user) {
	// 	router.pathname !== "/auth" && router.replace("/auth");
	// 	return null;
	// }

	// return <>{children}</>;
};

export default CheckRole;
