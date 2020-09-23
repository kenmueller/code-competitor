import { BasicInstructor } from 'models/Instructor'
import Card from './Card'

import styles from 'styles/components/Instructors/Main.module.scss'

export interface InstructorsMainProps {
	users: BasicInstructor[]
}

const InstructorsMain = ({ users }: InstructorsMainProps) => (
	<main className={styles.root}>
		{users.map(user => <Card key={user.slug} user={user} />)}
	</main>
)

export default InstructorsMain
