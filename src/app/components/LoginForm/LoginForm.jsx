import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { selectIsLoading } from '@/redux/auth/selectors';
import { loginUser } from '@/redux/auth/operations';
import Container from '../Container/Container';


export const LoginForm = () => {
    const router = useRouter();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthPending = useSelector(selectIsLoading);
    const [errorMessage, setErrorMessage] = useState(null);

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email format!').required('Required!'),
        password: yup.string().min(7, 'Min 7 letters!').required('Required!'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            setErrorMessage(null);
            dispatch(loginUser(values))
                .unwrap()
                .then(() => setErrorMessage(null))
                .catch(e => {
                    console.log(e);
                    setErrorMessage(e);
                });
        },
    });

    const handleOnClick = event => {
        event.preventDefault();
        router.push('/register');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                    sx={{ mt: 1 }}
                >
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email ? true : false}
                        helperText={formik.touched.email && formik.errors.email}
                        margin="normal"
                        required
                        title="email"
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                    // sx={{
                    //     borderRadius: 'var(--border-radius-btn)',
                    // }}
                    />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        margin="normal"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password && formik.errors.password ? true : false
                        }
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth
                        label="Password"
                        required
                        autoComplete="current-password"
                    />

                    <LoadingButton
                        type="submit"
                        loading={isAuthPending}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs="true"></Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={handleOnClick}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {errorMessage && (
                <Typography mt={2} color={'red'}>
                    {errorMessage}
                </Typography>
            )}
        </Container>
    );
};