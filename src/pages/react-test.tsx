import { useState } from 'react'
import Layout from '@theme/Layout'

const ReactTest = () => {
	interface User {
		name: string
		age: number
	}

	const [user, setUser] = useState<User | null>(null)
	const [nameInput, setName] = useState<string>('')
	const [ageInput, setAge] = useState<number | null>(null)

	const handleClick = () => {
		setUser({ name: nameInput, age: ageInput })
	}

	return (
		<Layout>
			<input
				type="text"
				value={nameInput}
				onChange={e => setName(e.target.value)}
				placeholder="Name"
				className="DocSearch-Input"
			/>
			<input
				type="number"
				value={ageInput}
				onChange={e => setAge(Number(e.target.value))}
				placeholder="Age"
			/>
			<button onClick={handleClick}>Set User</button>
			{user && <div>{user.name}</div>}
			{user && <div>{user.age}</div>}
		</Layout>
	)
}

export default ReactTest
