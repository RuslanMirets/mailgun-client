import { instance } from "@/api/api.interceptor";
import { IMail } from "@/store/mail/mail.interface";

export const MailService = {
	async create(data: any) {
		const response = await instance({
			url: "/mail/send",
			method: "POST",
			data,
		});

		return response.data;
	},
};
