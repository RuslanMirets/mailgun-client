import { createSlice } from "@reduxjs/toolkit";
import { sendMail } from "./mail.actions";

interface IInitialState {
	mail: IMail | null;
}

interface IMail {
	email: string;
	subject: string;
	message: string;
}

const initialState: IInitialState = {
	mail: null,
};

export const mailSlice = createSlice({
	name: "mail",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(sendMail.pending, (state) => {
				state.mail = null;
			})
			.addCase(sendMail.fulfilled, (state, { payload }) => {
				state.mail = payload;
			})
			.addCase(sendMail.rejected, (state) => {
				state.mail = null;
			});
	},
});
