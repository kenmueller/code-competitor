import { ChangeEvent, useCallback, useState } from 'react'

import styles from 'styles/components/Subscribe.module.scss'

const Subscribe = () => {
	const [email, setEmail] = useState('')
	
	const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}, [setEmail])
	
	return (
		<section className={styles.root}>
			<h3 className={styles.title}>
				Subscribe for news & updates
			</h3>
			<form className={styles.form}>
				<input
					className={styles.input}
					required
					type="email"
					placeholder="Email"
					value={email}
					onChange={onInputChange}
				/>
				<button className={styles.button}>
					Submit
				</button>
			</form>
		</section>
	)
}

export default Subscribe
