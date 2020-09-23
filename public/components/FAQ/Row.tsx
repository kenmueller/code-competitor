import { useCallback, useState } from 'react'
import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import { Question } from './Main'
import plus from 'images/icons/plus.svg'
import minus from 'images/icons/minus.svg'

import styles from 'styles/components/FAQ/Row.module.scss'

export interface FAQRowProps {
	question: Question
}

const FAQRow = ({ question }: FAQRowProps) => {
	const [isOpen, setIsOpen] = useState(false)
	
	const toggleIsOpen = useCallback(() => {
		setIsOpen(isOpen => !isOpen)
	}, [setIsOpen])
	
	return (
		<article className={styles.root}>
			<button className={styles.trigger} onClick={toggleIsOpen}>
				{isOpen
					? <Svg className={styles.icon} src={minus} />
					: <Svg className={styles.icon} src={plus} />
				}
				<p className={styles.key}>{question.key}</p>
			</button>
			<p className={cx(styles.value, { [styles.open]: isOpen })}>
				{question.value}
			</p>
		</article>
	)
}

export default FAQRow
