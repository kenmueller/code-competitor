import Row from './Row'

import styles from 'styles/components/FAQ/Main.module.scss'

export interface FAQMainProps {
	questions: string[]
}

const FAQMain = ({ questions }: FAQMainProps) => (
	<main className={styles.root}>
		{questions.map(question => (
			<Row key={question} question={question} />
		))}
	</main>
)

export default FAQMain
