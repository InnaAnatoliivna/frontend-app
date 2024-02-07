import React from 'react';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AllInboxIcon from '@mui/icons-material/AllInbox';

// public enum JobType
export const jobType = [
    {
        name: 'Zastępstwo',
        representation: 1,
        iconName: 'WorkHistoryIcon',
    },
    {
        name: 'Fotokopie akt',
        representation: 2,
        iconName: 'FileCopyIcon',
    },
    {
        name: 'Inne',
        representation: 3,
        iconName: 'AllInboxIcon',
    }
];

export const getIconComponentByName = (iconName) => {
    switch (iconName) {
        case 'WorkHistoryIcon':
            return <WorkHistoryIcon />;
        case 'FileCopyIcon':
            return <FileCopyIcon />;
        case 'AllInboxIcon':
            return <AllInboxIcon />;
        default:
            return null;
    }
};


// public enum ProffesionType
export const proffesionTypesArray = [
    { value: 1, name: "Adwokat" },
    { value: 2, name: "Aplikant adwokacki" },
    { value: 3, name: "Radca prawny" },
    { value: 4, name: "Aplikant radcowski" },
    { value: 5, name: "Inny" }
];

// public enum JobStatus
export const jobStatuses = [
    { value: 1, label: "Aktywne" },
    { value: 2, label: "Zakończone" }
];

// public enum CourtType
export const courtTypes = [
    { value: "SA", label: "Sąd apelacyjny" },
    { value: "SO", label: "Sąd okręgowy" },
    { value: "SR", label: "Sąd rejonowy" }
];

// public enum LegalSpecialization
export const legalSpecializations = [
    {
        name: "GeneralPractice",
        displayName: "Praktyka ogólna"
    },
    {
        name: "AdministrativeLawAndProcedure",
        displayName: "Prawo i postępowanie administracyjne"
    },
    {
        name: "ArbitrationProceedings",
        displayName: "Postępowanie arbitrażowe"
    },
    {
        name: "MediationProceedings",
        displayName: "Postępowanie mediacyjne"
    },
    {
        name: "CivilLawAndProcedure",
        displayName: "Prawo i postępowanie cywilne"
    },
    {
        name: "HumanRightsAndCivilLiberties",
        displayName: "Prawa człowieka i prawa obywatelskie"
    },
    {
        name: "ConstructionAndSpatialPlanningLaw",
        displayName: "Prawo budowlane i zagospodarowania przestrzennego"
    },
    {
        name: "EuropeanLaw",
        displayName: "Prawo europejskie"
    },
    {
        name: "CommercialLaw",
        displayName: "Prawo gospodarcze"
    },
    {
        name: "CompanyLaw",
        displayName: "Prawo spółek"
    },
    {
        name: "CriminalLawAndProcedure",
        displayName: "Prawo i postępowanie karne"
    },
    {
        name: "MedicalAndPharmaceuticalLaw",
        displayName: "Prawo medyczne i farmaceutyczne"
    },
    {
        name: "RealEstateTradingLaw",
        displayName: "Prawo obrotu nieruchomościami"
    },
    {
        name: "ConsumerProtectionLaw",
        displayName: "Prawo ochrony konsumentów"
    },
    {
        name: "EnvironmentalLaw",
        displayName: "Prawo ochrony środowiska"
    },
    {
        name: "BankingAndSecuritiesLaw",
        displayName: "Prawo bankowe i papierów wartościowych"
    },
    {
        name: "TaxAndFinancialLaw",
        displayName: "Prawo podatkowe i finansowe"
    },
    {
        name: "LaborLaw",
        displayName: "Prawo pracy"
    },
    {
        name: "PressLaw",
        displayName: "Prawo prasowe"
    },
    {
        name: "FamilyAndGuardianshipLaw",
        displayName: "Prawo rodzinne i opiekuńcze"
    },
    {
        name: "CompensationLaw",
        displayName: "Prawo odszkodowawcze"
    },
    {
        name: "InheritanceLaw",
        displayName: "Prawo spadkowe"
    },
    {
        name: "TransportationLaw",
        displayName: "Prawo transportowe"
    },
    {
        name: "SocialInsuranceLaw",
        displayName: "Prawo ubezpieczeń społecznych"
    },
    {
        name: "RestructuringLaw",
        displayName: "Prawo restrukturyzacyjne"
    },
    {
        name: "IntellectualPropertyAndTrademarksLaw",
        displayName: "Prawo własności intelektualnej i znaków towarowych"
    },
    {
        name: "PublicProcurementLaw",
        displayName: "Prawo zamówień publicznych"
    }
];