import { IUser } from "@/types/user.interface";
import { instance } from "@/api/api.interceptor";

export const UserService = {
	async getProfile() {
		return instance<IUser>({
			url: "/user/profile",
			method: "GET",
		});
	},
};
