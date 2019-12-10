import PatientActions from "./patientcomponents/patientactions/patientactions";
import Allergies from "./patientcomponents/allergies/allergies";
import AppointmentHistory from "./patientcomponents/appointmenthistory/appointmenthistory";
import PatientRequests from "./patientcomponents/patientrequests/patientrequests";
import Insurance from "./patientcomponents/insurance/insurance";
import Demographics from "./patientcomponents/demographics/demographics";
import Medications from "./patientcomponents/medications/medications";
import Diagnosis from "./patientcomponents/diagnosis/diagnosis";
import Documentation from "./patientcomponents/documentation/documentation";
import PatientForms from "./patientcomponents/patientforms/patientforms";
import MedicalHistory from "./patientcomponents/medicalhistory/medicalhistory";
import SurgicalHistory from "./patientcomponents/surgicalhistory/surgicalhistory";
import FamilyMedicalHistory from "./patientcomponents/familymedicalhistory/familymedicalhistory";
import SocialHistory from "./patientcomponents/socialhistory/socialhistory";
import PatientReports from "./patientcomponents/reports/patientreports";

const routes = [
    {
        label: 'Actions',
        path: '/patientactions',
        component: PatientActions,
    },
    {
        label: 'Appointments',
        path: '/appointmenthistory',
        component: AppointmentHistory,
    },
    {
        label: 'Requests',
        path: '/patientrequests',
        component: PatientRequests,
    },
    {
        label: 'Insurance',
        path: '/insurance',
        component: Insurance,
    },
    {
        label: 'Demographics',
        path: '/demographics',
        component: Demographics,
    },
    {
        label: 'Allergies',
        path: '/allergies',
        component: Allergies,
    },
    {
        label: 'Medications',
        path: '/medications',
        component: Medications,
    },
    {
        label: 'Diagnosis',
        path: '/diagnosis',
        component: Diagnosis,
    },
    {
        label: 'Documentation',
        path: '/documentation',
        component: Documentation,
    },
    {
        label: 'Forms',
        path: '/patientforms',
        component: PatientForms,
    },
    {
        label: 'Medical History',
        path: '/medicalhistory',
        component: MedicalHistory,
    },
    {
        label: 'Surgical History',
        path: '/surgicalhistory',
        component: SurgicalHistory,
    },
    {
        label: 'Family Medical History',
        path: '/familymedicalhistory',
        component: FamilyMedicalHistory,
    },
    {
        label: 'Social History',
        path: '/socialhistory',
        component: SocialHistory,
    },
    {
        label: 'Reports',
        path: '/patientreports',
        component: PatientReports,
    },
];

export default routes;