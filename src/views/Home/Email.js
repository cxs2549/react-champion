import styled from 'styled-components'
import logo from '../../assets/logo.png'
import email from '../../assets/email.png'
import { AiOutlineArrowRight } from 'react-icons/ai'

const StyledEmail = styled.div.attrs({ className: 'bg-[#252748] text-white' })`
`
const Email = () => {
	return (
		<StyledEmail>
			<div className="xl:max-w-screen  md:grid md:grid-cols-2">
				<div className="hidden md:block ">
					<img src={email} alt="" />
				</div>
				<div className="py-8 md:py-3 md:flex items-center xl:ml-16   md:flex-1 ">
					<div className="md:max-w-lg  flex flex-col items-center gap-6 px-4 ">
						<img src={logo} className="w-16 mx-auto" alt="" />
						<h1 className="text-center text-5xl font-semibold uppercase">
							get 15% off
						</h1>
						<p className="text-center leading-7 md:max-w-sm">
							Receive alerts about new arrivals and special deals when you sign up for
							emails, including 15% off your first order{' '}
							<span className="text-sm">(exclusions apply).</span>
						</p>
						<div className="w-full relative">
							<input
								type="email"
								placeholder="EMAIL ADDRESS"
								className="w-full focus:outline-none py-2 pl-2 pr-4  bg-transparent border-b"
							/>
							<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
								<AiOutlineArrowRight size={24} />
							</div>
						</div>
						<p className="text-[11px]">
							This site is protected by reCAPTCHA and the Google Privacy Policy and
							Terms of Service apply.
						</p>
					</div>
				</div>
			</div>
		</StyledEmail>
	)
}
export default Email
