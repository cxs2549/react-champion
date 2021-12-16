import styled from 'styled-components'
import { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import useOnClickOutside from 'use-onclickoutside'
import { BsChevronRight } from 'react-icons/bs'
import flag from '../../assets/flag.png'

const StyledBurger = styled.div.attrs({ className: '' })`
`
const Menu = ({ open, children }) => (
	<div
		className={`fixed top-20  w-72 z-10 h-screen bg-blue-600 transition-all duration-300 ${open
			? 'opacity-100 right-0'
			: 'opacity-70 -right-full'}`}
	>
		{children}
	</div>
)

const SignButtons = () => (
	<div className="pl-4">
		<div className="border-b cursor-pointer border-blue-800 py-5 flex items-center  uppercase font-semibold text-sm">
			sign in/register
		</div>
		<div className="border-b cursor-pointer border-blue-800 py-5 flex gap-4 items-center uppercase font-semibold text-sm">
			<p>shipping to: </p>
            <img src={flag} alt="" />
		</div>
	</div>
)

const Item = ({ title }) => {
	const [ isOpen, setOpen ] = useState(false)
	return (
		<div className="px-4">
			<div onClick={() => setOpen(!isOpen)} className=" py-3 flex items-center justify-between w-full cursor-pointer">
				<p className="uppercase font-bold text-xl">{title}</p>
				<div className={`transform ${isOpen ? 'rotate-90' : '' } transition-transform duration-200`}>
                    <BsChevronRight size={24} />
                </div>
			</div>
			{/* dropdown */}
			<div className={`${isOpen ? ' max-h-96 py-4 opacity-100' : 'opacity-0 pointer-events-none max-h-0' }  transition-all duration-300 `}>
				<ul className="uppercase font-normal flex flex-col gap-5 text-sm pl-4">
					<li>
						<p>men</p>
					</li>
					<li>
						<p>women</p>
					</li>
					<li>
						<p>winter collection</p>
					</li>
					<li>
						<p>last chance</p>
					</li>
					<li>
						<p>holiday HQ</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
	const ref = useRef()
	useOnClickOutside(ref, () => setOpen(false))
	return (
		<StyledBurger ref={ref}>
			<Hamburger size={26} distance="md" rounded toggled={isOpen} toggle={setOpen} />
			<Menu open={isOpen}>
				<SignButtons />
				<div className="pt-4">
                    <Item title="new" />
                    <Item title="men" />
                    <Item title="women" />
                    <Item title="kids" />
                    <Item title="collections" />
                    <Item title="last chance" />
                    <Item title="holiday hq" />
                </div>
			</Menu>
            <div className={`${isOpen ? 'opacity-80 pointer-events-none' : 'opacity-0' } fixed top-20 left-0 w-full h-screen bg-black transition-opacity duration-150`}></div>
		</StyledBurger>
	)
}
export default Burger
