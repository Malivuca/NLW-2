import React from 'react'

import { Container, ItemHeader, Footer } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
	return (
		<Container>
			<ItemHeader>
				<img
					src="https://avatars3.githubusercontent.com/u/48441789?s=460&u=3a292d0a5c2c2424992f3646f0fe53387929e340&v=4"
					alt="Miguel Demarque"
				/>
				<div>
					<strong>Miguel Demarque</strong>
					<span>Programação</span>
				</div>
			</ItemHeader>
			<p>Frontend developer. GitHub: http://github.com/malivuca</p>

			<Footer>
				<p>
					Preço/hora:
					<strong>R$ 100,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</Footer>
		</Container>
	)
}

export default TeacherItem
