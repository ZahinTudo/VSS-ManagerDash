import { configureStore } from "@reduxjs/toolkit";
import AddDriverSlice from "./AddDriverSlice";
import loginSlice from "./LoginSlice";
import MapSlice from "./MapSlice";
import MarkerSlice from "./MarkerSlice";
import AddTruckSlice from "./AddTruckSlice";
import AddClientSlice from "./AddClientSlice";
import AddTripSlice from "./AddTripSlice";

export const store = configureStore({
	reducer: {
		isLoggedIn: loginSlice,
		allMarkers: MarkerSlice,
		MapRef: MapSlice,
		addDriver: AddDriverSlice,
		addTruck: AddTruckSlice,
		addClient: AddClientSlice,
		addTrip: AddTripSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
