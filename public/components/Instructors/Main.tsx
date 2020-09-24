import { BasicInstructor } from 'models/Instructor'
import Card from './Card'

import styles from 'styles/components/Instructors/Main.module.scss'

export interface InstructorsMainProps {
	users: BasicInstructor[]
}

const InstructorsMain = ({ users }: InstructorsMainProps) => (
	<main className={styles.root}>
		<div className={styles.cards}>
			{users.map(user => <Card key={user.slug} user={user} />)}
		</div>
	</main>
)

export default InstructorsMain
