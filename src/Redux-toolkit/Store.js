import { configureStore } from "@reduxjs/toolkit";
import AddDriverSlice from "./AddDriverSlice";
import loginSlice from "./LoginSlice";
import MapSlice from "./MapSlice";
import MarkerSlice from "./MarkerSlice";

export const store = configureStore({
	reducer: {
		isLoggedIn: loginSlice,
		allMarkers: MarkerSlice,
		MapRef: MapSlice,
		addDriver: AddDriverSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
