import { MailService } from "@/services/mail.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const sendMail = createAsyncThunk(
	"mail/send",
	async (data: any, thunkApi) => {
		try {
			const response = await MailService.create(data);
			toast.success("Письмо успешно отправлено");
			return response;
		} catch (error: any) {
			toast.error(error.response.data.message);
			return thunkApi.rejectWithValue(error);
		}
	},
);
