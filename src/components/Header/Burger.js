import styled from 'styled-components'
import { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import useOnClickOutside from 'use-onclickoutside'

const StyledBurger = styled.div.attrs({ className: '' })`
`
const Menu = ({open}) => (
    <div className={`fixed top-20  w-full h-screen bg-blue-600 transition-all duration-300 ${open ? 'opacity-100 left-0' : 'opacity-70 left-full' }`}>
        menu
    </div>
)

const Burger = () => {
	const [ isOpen, setOpen ] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setOpen(false))
	return (
		<StyledBurger ref={ref}>
			<Hamburger size={26} distance="md" rounded toggled={isOpen} toggle={setOpen} />
            <Menu open={isOpen} />
		</StyledBurger>
	)
}
export default Burger
