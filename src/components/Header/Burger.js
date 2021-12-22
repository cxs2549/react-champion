import styled from 'styled-components'
import { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import useOnClickOutside from 'use-onclickoutside'
import { BsChevronRight } from 'react-icons/bs'
import flag from '../../assets/flag.png'

const StyledBurger = styled.div.attrs({ className: 'md:hidden' })`
ul li {
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
`
const Menu = ({ open, children }) => (
	<div
		id="menu"
		className={`fixed top-20  w-72 z-10 bg-blue-500 border-t border-blue-600 transition-all duration-300 ease-out overflow-auto h-screen ${open
			? 'opacity-100 right-0'
			: 'opacity-70 -right-full'}`}
	>
		{children}
	</div>
)

const SignButtons = () => (
	<div className="">
		<div className="border-b cursor-pointer px-4 border-blue-600 py-5 flex items-center  uppercase font-semibold text-sm hover:bg-blue-400">
			sign in/register
		</div>
		<div className="border-b px-4 cursor-pointer border-blue-600 py-5 flex gap-4 items-center uppercase font-semibold text-sm hover:bg-blue-400">
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
				className=" p-4 md:pt-0 flex items-center justify-between w-full cursor-pointer md:cursor-default hover:bg-blue-400 md:hover:bg-transparent xl:px-0"
			>
				<p
					className={`${textsm
						? 'text-base'
						: 'text-xl'} uppercase font-bold md:text-sm whitespace-nowrap`}
				>
					{title}
				</p>
				<div
					className={`transform ${isOpen
						? 'rotate-90'
						: ''} transition-transform duration-200 md:hidden`}
				>
					<BsChevronRight size={24} />
				</div>
			</div>
			{/* dropdown */}
			<div
				className={`${isOpen
					? ' max-h-96 py-2 opacity-100'
					: 'opacity-0 hidden pointer-events-none max-h-0'}  transition-all duration-300 md:hidden`}
			>
				<ul className="uppercase font-normal flex flex-col gap-5 text-sm pl-8 md:pl-0 md:gap-3 ">
					<li className="cursor-pointer hover:underline">
						<p>men</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>women</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>winter collection</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>last chance</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>holiday HQ</p>
					</li>
				</ul>
			</div>
			<div className="md:block hidden">
				<ul className="uppercase font-normal flex flex-col gap-5 text-sm pl-8 md:pl-4 xl:pl-0 md:gap-3 ">
					<li className="cursor-pointer hover:underline">
						<p>men</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>women</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>winter collection</p>
					</li>
					<li className="cursor-pointer hover:underline">
						<p>last chance</p>
					</li>
					<li className="cursor-pointer hover:underline">
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
	const handleToggle = () => {
		setOpen(!isOpen)
		document.body.style.overflow = !isOpen ? 'hidden' : 'visible'
	}
	const handleClose = () => {
		setOpen(false)
		document.body.style.overflow = 'visible'
	}
	useOnClickOutside(ref, handleClose)

	return (
		<StyledBurger ref={ref}>
			<Hamburger size={26} distance="md" rounded toggled={isOpen} toggle={handleToggle} />
			<Menu open={isOpen}>
				<SignButtons />
				<div>
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
					? 'opacity-60 '
					: 'opacity-0'} pointer-events-none fixed top-20 left-0 w-full h-screen bg-black transition-opacity duration-150`}
			/>
		</StyledBurger>
	)
}
export default Burger
