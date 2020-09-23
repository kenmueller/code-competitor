import questions from 'data/faq.json'
import Row from './Row'

import styles from 'styles/components/FAQ/Main.module.scss'

export interface Question {
	key: string
	value: string
}

const FAQMain = () => (
	<main className={styles.root}>
		{questions.map((question, i) => (
			<Row key={i} question={question} />
		))}
	</main>
)

export default FAQMain
