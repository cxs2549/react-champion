import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { BsBag } from 'react-icons/bs'
import Burger from './Burger'
import { useState, useRef } from 'react'
import {GrClose} from 'react-icons/gr'
import useOnClickOutside from 'use-onclickoutside'

const StyledHeader = styled.header.attrs({
	className: 'h-20 flex items-center shadow px-4 bg-blue-700 text-white'
})`
`
const Logo = () => (
	<div className="flex-1">
		<img src={logo} alt="" className="w-12" />
	</div>
)

const Search = () => {
	const [ isOpen, setOpen ] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
        setTimeout(() => {
            inputRef.current.focus()
        }, 800)
    }
    const inputRef = useRef()
    const ref = useRef()
    useOnClickOutside(ref, () => setOpen(false))
	return (
		<div ref={ref}>
			<svg
				onClick={handleOpen}
				version="1.1"
				className="w-8 cursor-pointer"
				baseProfile="tiny"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 24 24"
				overflow="visible"
			>
				<g>
					<path
						fill="none"
						stroke="#fff"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.1,15.3l5,5"
					/>
					<path
						fill="none"
						stroke="#fff"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.6,16.9
            c3.6,0,6.6-2.9,6.6-6.6c0-3.6-2.9-6.6-6.6-6.6C6.9,3.8,4,6.7,4,10.4C4,14,6.9,16.9,10.6,16.9z"
					/>
				</g>
			</svg>
			<div
				className={`fixed left-0 top-0 bg-white w-full h-20 z-10 flex items-center px-4 transition-opacity duration-300 ${isOpen
					? 'opacity-100'
					: 'opacity-0 pointer-events-none'}`}
			>
				<div className="relative w-full flex">
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg
				onClick={() => setOpen(!isOpen)}
				version="1.1"
				className="w-8 cursor-pointer"
				baseProfile="tiny"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 24 24"
				overflow="visible"
			>
				<g>
					<path
						fill="none"
						stroke="#000"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.1,15.3l5,5"
					/>
					<path
						fill="none"
						stroke="#000"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.6,16.9
            c3.6,0,6.6-2.9,6.6-6.6c0-3.6-2.9-6.6-6.6-6.6C6.9,3.8,4,6.7,4,10.4C4,14,6.9,16.9,10.6,16.9z"
					/>
				</g>
			</svg>
                    </div>
					<input
                        ref={inputRef}
						type="search"
						placeholder="Search"
						className="w-full py-3 px-10 bg-white focus:outline-none text-gray-800"
					/>
				<button onClick={() => setOpen(false)} className="absolute right-3 top-1/2 transform -translate-y-1/2" >
                    <GrClose size={26} />
                </button>
				</div>
			</div>
		</div>
	)
}
const Heart = () => (
	<svg
		version="1.1"
		baseProfile="tiny"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		viewBox="0 0 24 24"
		overflow="visible"
		className="w-9"
	>
		<path
			fill="none"
			stroke="#fff"
			stroke-width="1.2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M4.1,7
	c0.5-0.9,3.6-3.8,7.3-0.2c0.1,0.1,0.2,0.1,0.3,0.2C11.8,7,11.9,7,12,7s0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.3-0.2c3.8-3.7,6.8-0.7,7.3,0.2
	c0.5,0.9,0.7,2,0.5,3c-0.2,1-0.7,2-1.5,2.7l-6.3,6.1c-0.1,0.1-0.2,0.1-0.3,0.2C12.2,19,12.1,19,12,19c-0.1,0-0.2,0-0.3-0.1
	c-0.1,0-0.2-0.1-0.3-0.2l-6.3-6.1C4.3,12,3.7,11,3.6,10C3.4,9,3.6,7.9,4.1,7L4.1,7z"
		/>
	</svg>
)
const Bag = () => <BsBag size={26} />

const Header = () => {
	return (
		<StyledHeader>
			<div className="max-w-7xl mx-auto flex items-center w-full gap-6">
				<Logo />
				<Search />
				<Heart />
				<Bag />
				<Burger />
			</div>
		</StyledHeader>
	)
}
export default Header
