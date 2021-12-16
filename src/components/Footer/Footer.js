import styled from 'styled-components'
import {Item} from '../Header/Burger'
import logo from '../../assets/logo.png'

const StyledFooter = styled.footer.attrs({
	className: 'py-8 text-white bg-[hsl(237.7,_34.2%,_19.9%)]'
})`
`
const Socials = () => (
    <div className="flex items-center justify-between">
        <div className="text-2xl flex gap-8">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <img src={logo} alt="" />
    </div>
)

const Accordions = () => (
    <div className="py-8">
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
			<div className="max-w-7xl mx-auto px-4">
                <Socials />
                <Accordions />
                <div className="uppercase text-center text-xs font-bold py-4">
                ©2021 CxS for Hanesbrands Inc.  All rights reserved.
                </div>
                <div className="capitalize flex gap-8 text-xs justify-center">
                    <a href="/">terms & conditions</a>
                    <a href="/">privacy policy</a>
                </div>
            </div>
		</StyledFooter>
	)
}
export default Footer
