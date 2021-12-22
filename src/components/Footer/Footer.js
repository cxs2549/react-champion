import styled from 'styled-components'
import {Item} from '../Header/Burger'
import logo from '../../assets/logo.png'

const StyledFooter = styled.footer.attrs({
	className: 'py-8 text-white bg-blue-500'
})`
    
`
const Socials = () => (
    <div className="flex items-center justify-between px-4 xl:px-0 md:gap-6 h-full ">
        <div className="text-3xl flex gap-8 md:order-1  items-center h-full">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <img src={logo} alt="" className="w-12" />
    </div>
)

const Accordions = () => (
    <div className="py-8 md:flex md:gap-4 md:order-1 w-full lg:grid lg:grid-cols-5 lg:mb-4 ">
        <Item textsm title="customer assistance" />
        <Item textsm title="my account" />
        <Item textsm title="shop with confidence" />
        <Item textsm title="programs" />
        <Item textsm title="our company" />
    </div>
)

const Footer = () => {
	return (
		<StyledFooter>
			<div className="max-w-7xl mx-auto flex flex-col">
                <Socials />
                <Accordions />
                <div className="order-3 flex flex-col md:flex-row md:items-center gap-4 justify-between ">
                    <div className="uppercase px-4 xl:px-0  text-xs font-bold ">
                    ©2021 CxS for Hanesbrands Inc.  All rights reserved.
                    </div>
                    <div className="capitalize flex gap-8 text-sm px-4 xl:px-0">
                        <a href="/" className="hover:underline">terms & conditions</a>
                        <a href="/" className="hover:underline">privacy policy</a>
                    </div>
                </div>
            </div>
		</StyledFooter>
	)
}
export default Footer
