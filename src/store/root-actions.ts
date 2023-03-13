import * as userAction from "./user/user.actions";
import * as mailAction from "./mail/mail.actions";

export const rootActions = {
	...userAction,
	...mailAction,
};
