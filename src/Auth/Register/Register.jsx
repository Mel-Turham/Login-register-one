import image from '../../assets/saly.svg';
import Fb from '../../assets/Facebook.svg';
import Ap from '../../assets/apple.svg';
import Gg from '../../assets/google.svg';
import './Register.css';
import { Formik } from 'formik';
import { MdError } from "react-icons/md";
import * as Yup from 'yup';
const Register = () => {
	return (
		<section className='container-sign'>
			<div className='sign-left'>
				<h1>Sign up </h1>
				<h3>Lorem ipsum is simply</h3>
				<p>
					if you already have an account You can
					{''}
					<span>
						<a href='#'>Login here !</a>
					</span>
				</p>
				<div className='conatainer-img'>
					<img src={image} alt='Illustrator' loading='lazy' />
				</div>
			</div>

			<Formik
				initialValues={{
					email: '',
					username: '',
					phoneNumber: '',
					password: '',
					confirmpwd: '',
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.trim()
						.email('Email is not valide')
						.required('Email is required'),
					username: Yup.string()
						.trim()
						.max(20, 'username is too long ')
						.min(10, 'username is too shoot')
						.required('username is required'),
					phoneNumber: Yup.number()
						.min(8, 'Number will be 8 caracter')
						.required('Phone numbre is required'),
					password: Yup.number().required('The password is required'),
					confirmpwd: Yup.number()
						.required('This is required please')
						.oneOf([Yup.ref('password'), null], 'The passwords not matches'),
				})}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{(formik) => (
					<form className='sign-form' onSubmit={formik.handleSubmit}>
						<div className='container-fields'>
							<div className='field-row'>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Enter your e-mail'
									{...formik.getFieldProps('email')}
								/>
								{formik.touched.email && formik.errors.email ? (
									<p className='error'>{formik.errors.email}<MdError /></p>
								) : null}
							</div>
							<div className='field-row'>
								<input
									type='text'
									name='username'
									id='username'
									placeholder='Create user name'
									{...formik.getFieldProps('username')}
								/>

								{formik.touched.username && formik.errors.username ? (
									<p className='error'>{formik.errors.username}<MdError /></p>
								) : null}
							</div>
							<div className='field-row'>
								<input
									type='tel'
									name='tel'
									id='number'
									placeholder='Contact number'
									{...formik.getFieldProps('phoneNumber')}
								/>
								{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
									<p className='error'>{formik.errors.phoneNumber}<MdError /></p>
								) : null}
							</div>
							<div className='field-row'>
								<input
									type='password'
									name='password'
									id='password'
									placeholder='Password...'
									{...formik.getFieldProps('password')}
								/>
								{formik.touched.password && formik.errors.password ? (
									<p className='error'>{formik.errors.password}<MdError /></p>
								) : null}
							</div>
							<div className='field-row'>
								<input
									type='password'
									name='confirmpwd'
									id='confirmpwd'
									placeholder='Confirme password'
									{...formik.getFieldProps('confirmpwd')}
								/>
								{formik.touched.confirmpwd && formik.errors.confirmpwd ? (
									<p className='error'>{formik.errors.confirmpwd}<MdError /></p>
								) : null}
							</div>
						</div>

						<button type='submit' className='btnSubmit'>
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
export default Register;
