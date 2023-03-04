import { render } from "@testing-library/react";
import { C01LogoutButton } from './C01LogoutButton'


describe ('suit-cate5-buttons-C01-LogoutButtom', () => {

	const const01url = 'https://www.example.com/'
	const const02urlIcon = 'https://www.assets.com/icon.png'
	const const03title = 'Ejemplo de título'
	const const04css = 'icon'
	
	const { container } = 
			render (
			<C01LogoutButton 
				url={ const01url } 
				urlIcon={ const02urlIcon } 
				title= { const03title} 
				css= { const04css } 
			/>)
			
	test('test01-C01 - El Snapshot debe coincidir', () => {
			
		expect( container).toMatchSnapshot()	
	});
	
	test('test02-C01 - El boton logout debe desaparecer', () => {
	
	});
	
});