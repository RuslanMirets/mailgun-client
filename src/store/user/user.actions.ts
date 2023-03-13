import { errorCatch } from "@/api/api.helper";
import { removeFromStorage } from "@/services/auth/auth.helper";
import { AuthService } from "@/services/auth/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IAuthResponse, IEmailPassword } from "./user.interface";

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	"auth/register",
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main("register", data);
			toast.success("Успешная регистрация");
			return response;
		} catch (error: any) {
			toast.error(error.response.data.message);
			return thunkApi.rejectWithValue(error);
		}
	},
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	"auth/login",
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main("login", data);
			toast.success("Успешная авторизация");
			return response;
		} catch (error: any) {
			toast.error(error.response.data.message);
			return thunkApi.rejectWithValue(error);
		}
	},
);

export const logout = createAsyncThunk("auth/logout", async () => {
	toast.info("Выход из системы");
	removeFromStorage();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
	"auth/check-auth",
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === "jwt expired") {
				thunkApi.dispatch(logout());
			}

			return thunkApi.rejectWithValue(error);
		}
	},
);
