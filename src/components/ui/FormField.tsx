import { TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IFormField {
	name: string;
	label: string;
	type?: string;
	disabled?: boolean;
	multiline?: boolean;
	maxRows?: number;
	rows?: number;
}

export const FormField: React.FC<IFormField> = ({
	name,
	label,
	type,
	disabled,
	multiline,
	maxRows,
	rows,
}) => {
	const { register, formState } = useFormContext();

	return (
		<TextField
			{...register(name)}
			label={label}
			type={type}
			variant="outlined"
			size="small"
			error={!!formState.errors[name]?.message}
			helperText={formState.errors[name]?.message?.toString()}
			disabled={disabled}
			multiline={multiline}
			maxRows={maxRows}
			rows={rows}
		/>
	);
};
