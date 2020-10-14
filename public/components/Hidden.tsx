import { PropsWithChildren, ReactNode, useState, useCallback } from 'react'

import styles from 'styles/components/Hidden.module.scss'

export interface HiddenProps extends PropsWithChildren<{}> {
	trigger: ReactNode
}

const Hidden = ({ trigger, children }: HiddenProps) => {
	const [isShowing, setIsShowing] = useState(false)
	
	const show = useCallback(() => {
		setIsShowing(true)
	}, [setIsShowing])
	
	return isShowing
		? children
		: (
			<button className={styles.trigger} onClick={show}>
				{trigger}
			</button>
		)
}

export default Hidden
