export interface IMail {
	email: string;
	subject: string;
	message: string;
}

export interface IInitialState {
	mail: IMail | null;
}
