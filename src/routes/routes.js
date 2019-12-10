// DONT USE
import React from 'react';
import Home from '../components/Home/home';
import Appointments from "../components/Appointments/appointments";

const routes = {
    "/": () => <Home />,
    "/appointments": () => <Appointments/>
};

export default routes;