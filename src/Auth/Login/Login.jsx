import './Login.css';
import image from '../../assets/saly.svg';
import Fb from '../../assets/Facebook.svg'
import Ap from '../../assets/apple.svg'
import Gg from '../../assets/google.svg'
const Login = () => {
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

			<form className='Login-form'>
				<h2>Sign In</h2>

				<div className='container-fields'>
					<div className='field-row'>
						<input
							type='text'
							name='email'
							id='email'
							placeholder='Enter your e-mail or your username'
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
				</div>
				<span >Forgot password ?</span>

				<button type='submit' className='btnSubmit'>
					Login
				</button>

				<div className='container-socials'>
					<p>or continu white</p>
					<div className='socials'>
            <img src={Fb} alt="Facebook " loading='lazy' />
            <img src={Ap} alt="Apple"  loading='lazy'/>
            <img src={Gg} alt="Google" loading='lazy' />
          </div>
				</div>
			</form>
		</section>
	);
};
export default Login;
