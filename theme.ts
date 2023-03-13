import { createTheme } from "@mui/material";
import { ruRU } from "@mui/material/locale";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
	weight: ["400", "500", "600", "700"],
});

export const theme = createTheme(
	{
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						padding: "20px 15px 25px",
					},
				},
			},
		},
		palette: {
			primary: {
				main: "#5c6bc0",
				light: "#8e99f3",
				dark: "#26418f",
				contrastText: "#ebebeb",
			},
			secondary: {
				main: "#26a69a",
				light: "#64d8cb",
				dark: "#00766c",
				contrastText: "#ffffff",
			},
		},
		shape: {
			borderRadius: 8,
		},
		typography: {
			fontFamily: manrope.style.fontFamily,
		},
	},
	ruRU,
);
