import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { signUpUser } from '@/redux/auth/operations';
import { selectIsLoading } from '@/redux/auth/selectors';
import Container from '../Container/Container';
import { TextFieldStyled } from './RegisterForm.styled';

const RegisterForm = () => {
    const router = useRouter();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthPending = useSelector(selectIsLoading);
    const [errorMessage, setErrorMessage] = useState(null);

    const validationSchema = yup.object().shape({
        firstName: yup
            .string()
            .min(2, 'Min 2 letter!')
            .matches(
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                'only letters, apostrophe, dash and spaces'
            )
            .required('Required!'),
        lastName: yup
            .string()
            .min(2, 'Min 2 letter!')
            .matches(
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                'only letters, apostrophe, dash and spaces'
            )
            .required('Required!'),
        email: yup.string().email('Invalid email format!').required('Required!'),
        password: yup.string().min(7, 'Min 7 letters!').required('Required!'),
        repeatPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Required!'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            const { firstName, lastName, email, password, repeatPassword } = formik.values;
            dispatch(
                signUpUser({
                    firstName: `${firstName.trim()}`,
                    lastName: `${lastName.trim()}`,
                    email: email,
                    password: password,
                })
            )
                .unwrap()
                .then(() => setErrorMessage(null))
                .catch(e => {
                    console.log(e);
                    setErrorMessage(e);
                });
        },
    });

    // const handleOnClick = event => {
    //     event.preventDefault();
    //     router.push('/login', { replace: true });
    // };

    return (
        <Container>
            {/* // <Container component="main" maxWidth="xs"> */}
            <CssBaseline />
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '480px',
                    margin: '8px auto 0px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{
                        mt: 3,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'center',
                        gap: '12px'
                    }}
                >
                    <TextFieldStyled
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.firstName && formik.errors.firstName
                                ? true
                                : false
                        }
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        title="Only letter and -"
                        required
                        fullWidth
                        label="First Name"
                        autoComplete="given-name"
                    />
                    <TextFieldStyled
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.lastName && formik.errors.lastName
                                ? true
                                : false
                        }
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        pattern="[a-zA-Z\-]{2,}"
                        title="Only latin letter and -"
                        label="Last Name"
                        autoComplete="family-name"
                    />
                    <TextFieldStyled
                        required
                        type="email"
                        title="email"
                        fullWidth
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && formik.errors.email ? true : false
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextFieldStyled
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password && formik.errors.password
                                ? true
                                : false
                        }
                        helperText={formik.touched.password && formik.errors.password}
                        required
                        fullWidth
                        title="minimum 7 symbol "
                        label="Password"
                        autoComplete="new-password"
                    />
                    <TextFieldStyled
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.repeatPassword && formik.errors.repeatPassword
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.repeatPassword && formik.errors.repeatPassword
                                ? formik.errors.repeatPassword
                                : null
                        }
                        required
                        fullWidth
                        title="Repeat the password"
                        label="Repeat Password"
                        autoComplete="new-password"
                    />
                    <LoadingButton
                        disabled={!formik.isValid}
                        type="submit"
                        fullWidth
                        loading={isAuthPending}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </LoadingButton>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {
                errorMessage && (
                    <Typography mt={2} color={'red'}>
                        {errorMessage}
                    </Typography>
                )
            }
        </Container>
    );
};

export default RegisterForm