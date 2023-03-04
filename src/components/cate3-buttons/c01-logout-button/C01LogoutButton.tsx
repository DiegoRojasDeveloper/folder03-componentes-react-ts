import './C01LogoutButton.scss'


export interface IC01LogoutButton {
	url?: string,
	urlIcon?: string,
    title?: string,
    css?: string
}

export const C01LogoutButton = ( { url, title, urlIcon, css }: IC01LogoutButton ) => {
	return (
		<button className={`mc-cate3-buttons-C01--logout-button ${ css }`}>
			<img src={ urlIcon } />{ title }
		</button>
	)
}

