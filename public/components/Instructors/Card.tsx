import Link from 'next/link'
import Img from 'react-optimized-image'

import { BasicInstructor } from 'models/Instructor'

import styles from 'styles/components/Instructors/Card.module.scss'

export interface InstructorsMainCardProps {
	user: BasicInstructor
}

const InstructorsMainCard = ({ user }: InstructorsMainCardProps) => (
	<Link href="/instructors/[slug]" as={`/instructors/${user.slug}`}>
		<a className={styles.root}>
			<div className={styles.imageContainer}>
				<Img
					className={styles.image}
					src={require(`images/instructors/${user.slug}.png`)}
					alt={user.name}
					webp
				/>
			</div>
			<p className={styles.name}>{user.name}</p>
		</a>
	</Link>
)

export default InstructorsMainCard
