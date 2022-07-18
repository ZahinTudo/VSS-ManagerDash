import {
	faCommenting,
	faMapMarkerAlt,
	faPencil,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ClientTable from "./ClientTable/ClientTable";
import DriverTable from "./DriverTable/DriverTable";
import "./TabTable.css";
import TrucksTable from "./TrucksTable/TrucksTable";

export default function TabTable({ url, type }) {
	const [activeTrip, setActiveTrip] = useState(null);
	const getData = () => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => setActiveTrip(result))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getData();
	}, []);
	if (type === "truck") return <TrucksTable activeTrip={activeTrip} />;

	if (type === "driver") return <DriverTable activeTrip={activeTrip} />;

	if (type === "client") return <ClientTable activeTrip={activeTrip} />;
}
