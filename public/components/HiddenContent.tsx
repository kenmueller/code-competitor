import { PropsWithChildren, useState, useCallback } from 'react'

import styles from 'styles/HiddenContent.module.scss'

const HiddenContent = ({
	buttonText,
	children
}: PropsWithChildren<{ buttonText: string }>) => {
	const [isShowing, setIsShowing] = useState(false)
	
	const show = useCallback(() => {
		setIsShowing(true)
	}, [setIsShowing])
	
	return (
		<>
			<button
				className={styles.button}
				onClick={show}
				hidden={isShowing}
			>
				{buttonText}
			</button>
			<div hidden={!isShowing}>
				{children}
			</div>
		</>
	)
}

export default HiddenContent
