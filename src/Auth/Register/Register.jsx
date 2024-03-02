import image from '../../assets/saly.svg';
import Fb from '../../assets/Facebook.svg';
import Ap from '../../assets/apple.svg';
import Gg from '../../assets/google.svg';
import './Register.css';
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

			<form className='sign-form'>
				<h2>Sign up</h2>

				<div className='container-fields'>
					<div className='field-row'>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your e-mail'
						/>
					</div>
					<div className='field-row'>
						<input
							type='text'
							name='username'
							id='email'
							placeholder='Create user name'
						/>
					</div>
					<div className='field-row'>
						<input
							type='tel'
							name='tel'
							id='number'
							placeholder='Contact number'
						/>
					</div>
					<div className='field-row'>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password...'
						/>
					</div>
					<div className='field-row'>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Confirme password'
						/>
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
		</section>
	);
};
export default Register;
