import './Login.css';
import image from '../../assets/saly.svg';
import Fb from '../../assets/Facebook.svg';
import Ap from '../../assets/apple.svg';
import Gg from '../../assets/google.svg';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Formik } from 'formik';
import { useState } from 'react';
const Login = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return (
		<section className='container-login'>
			<div className='login-left'>
				<h1>Sign in </h1>
				<h3>Lorem ipsum is simply</h3>
				<p>
					if you don&quot;t have an account You can
					{''}
					<span>
						<a href='#'>Register here !</a>
					</span>
				</p>
				<div className='conatainer-img'>
					<img src={image} alt='Illustrator' loading='lazy' />
				</div>
			</div>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					const errors = {};

					if (!values.email) {
						errors.email = 'the email is Required please';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalide email address';
					}

					if (!values.password) {
						errors.password = 'the password is Required please';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form className='Login-form' onSubmit={handleSubmit}>
						<div className='container-fields'>
							<div className='field-row'>
								<input
									type='email'
									name='email'
									id='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder='Enter your e-mail or your username'
								/>
							</div>
							<p className='error'>
								{errors.email && touched.email && errors.email}
							</p>

							<div className='field-row'>
								<input
									type={isShowPassword ? 'text' : 'password'}
									name='password'
									id='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									placeholder='Password...'
								/>
								<span
									className='ckeckpassword'
									onClick={() =>
										setIsShowPassword((currentState) => !currentState)
									}
								>
									{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
								</span>
							</div>
							<p className='error'>
								{errors.password && touched.password && errors.password}
							</p>
						</div>
						<span>Forgot password ?</span>

						<button type='submit' className='btnSubmit' disabled={isSubmitting}>
							Login
						</button>

						<div className='container-socials'>
							<p>or continu white</p>
							<div className='socials'>
								<img src={Fb} alt='Facebook ' loading='lazy' />
								<img src={Ap} alt='Apple' loading='lazy' />
								<img src={Gg} alt='Google' loading='lazy' />
							</div>
						</div>
					</form>
				)}
			</Formik>
		</section>
	);
};
export default Login;
