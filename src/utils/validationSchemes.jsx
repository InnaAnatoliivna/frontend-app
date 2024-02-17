import * as Yup from 'yup';

export const validationAddOffers = Yup.object().shape({
    title: Yup.string().min(4, "Najmniej 4 litery!").required('Pole tytułu jest obowiązkowe'),
    description: Yup.string(),
    gotJobType: Yup.number().required('Wybierz rodzaj ogłoszenia'),
    // proffesionTypes: Yup.array().required(1, 'Wybierz przynajmniej jedną kwalifikację'),
    court: Yup.string().required('Wybierz sąd'),
    region: Yup.string().required('Wybierz region'),
    city: Yup.string().required('Wybierz miasto'),
    postalCode: Yup.string()
        .matches(/^\d{2}-\d{3}$/, 'Wprowadź kod pocztowy w formacie XX-XXX')
        .required('Wprowadź kod pocztowy'),
    streetAddress: Yup.string().required('Wprowadź adres'),
    date: Yup.string()
        .matches(
            /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
            'Data powinna być w formacie DD-MM-RRRR'
        ),
    time: Yup.string(),
    email: Yup.string().required().email('Wprowadź poprawny adres email'),
    phone: Yup.string().required(),
    compensation: Yup.number(),
});