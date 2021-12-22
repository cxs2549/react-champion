import styled from 'styled-components'
import heroMobile from '../../assets/hero/hero-mobile.png'
import heroTablet from '../../assets/hero/hero-tablet.png'
const StyledHero = styled.div.attrs({ className: ''  })`
`
const Hero = () => {
return (
<StyledHero>
    <img src={heroMobile} className="w-full md:hidden" alt="" />
    <img src={heroTablet} className="w-full hidden md:block" alt="" />
</StyledHero>
)
}
export default Hero