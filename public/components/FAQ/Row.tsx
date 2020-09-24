import { useCallback, useState } from 'react'
import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import plus from 'images/icons/plus.svg'
import minus from 'images/icons/minus.svg'

import styles from 'styles/components/FAQ/Row.module.scss'
import Article from 'components/Article'

export interface FAQRowProps {
	question: string
}

const FAQRow = ({ question: slug }: FAQRowProps) => {
	const { default: Value, name } = require(`articles/faq/${slug}.mdx`)
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
				<p className={styles.name}>{name}</p>
			</button>
			<Article className={cx(styles.value, { [styles.open]: isOpen })}>
				<Value />
			</Article>
		</article>
	)
}

export default FAQRow
