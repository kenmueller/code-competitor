import cx from 'classnames'

import styles from 'styles/components/Spinner.module.scss'

export interface SpinnerProps {
	className?: string
}

const Spinner = ({ className }: SpinnerProps) => (
	<span className={cx(styles.root, className)} />
)

export default Spinner
