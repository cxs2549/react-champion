import { Fragment } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './views/Home/Home'

const App = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</Fragment>
	)
}

export default App
