import { C01Ancla } from './components/cate7-anclas/c01-ancla/C01Ancla'
import { C01Logo } from './components/cate5-logos/c01-logo/C01Logo'
import { C01LogoutButton } from './components/cate3-buttons/c01-logout-button/C01LogoutButton'


function App() {

	return (

	<>
	<C01Ancla url='http://localhost:5173/'/>
	<C01LogoutButton 
		title='Título del botton'
	/>
	</>
	)
}

export default App

