import styled from 'styled-components'
import { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import useOnClickOutside from 'use-onclickoutside'
import { BsChevronRight } from 'react-icons/bs'
import flag from '../../assets/flag.png'

const StyledBurger = styled.div.attrs({ className: '' })`
ul li {
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
`
const Menu = ({ open, children }) => (
	<div
		className={`fixed top-20 pl-4  w-72 z-10 h-screen bg-blue-600 transition-all duration-300 overflow-y-scroll ${open
			? 'opacity-100 right-0'
			: 'opacity-70 -right-full'}`}
	>
		{children}
	</div>
)

const SignButtons = () => (
	<div className="">
		<div className="border-b cursor-pointer border-blue-800 py-5 flex items-center  uppercase font-semibold text-sm">
			sign in/register
		</div>
		<div className="border-b cursor-pointer border-blue-800 py-5 flex gap-4 items-center uppercase font-semibold text-sm">
			<p>shipping to: </p>
			<img src={flag} alt="" />
		</div>
	</div>
)

export const Item = ({ title, textsm }) => {
	const [ isOpen, setOpen ] = useState(false)
	const handleToggle = () => {
		setOpen(!isOpen)
	}
	return (
		<div className="">
			<div
				onClick={handleToggle}
				className=" py-3 flex items-center justify-between w-full cursor-pointer"
			>
				<p className={`${textsm ? 'text-base' : 'text-xl'  } uppercase font-bold`}>{title}</p>
				<div
					className={`transform ${isOpen
						? 'rotate-90'
						: ''} transition-transform duration-200`}
				>
					<BsChevronRight size={24} />
				</div>
			</div>
			{/* dropdown */}
			<div
				className={`${isOpen
					? ' max-h-96 py-4 opacity-100'
					: 'opacity-0 hidden pointer-events-none max-h-0'}  transition-all duration-300 `}
			>
				<ul className="uppercase font-normal flex flex-col gap-5 text-sm pl-4 md:flex-row">
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
				<div className="pt-4 pr-4">
					<Item title="new" open={isOpen} />
					<Item title="men" />
					<Item title="women" />
					<Item title="kids" />
					<Item title="collections" />
					<Item title="last chance" />
					<Item title="holiday hq" />
				</div>
			</Menu>
			<div
				className={`${isOpen
					? 'opacity-80 '
					: 'opacity-0'} pointer-events-none fixed top-20 left-0 w-full h-screen bg-black transition-opacity duration-150`}
			/>
		</StyledBurger>
	)
}
export default Burger
