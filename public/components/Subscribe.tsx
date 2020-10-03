import { useState, useCallback, ChangeEvent } from 'react'

import identifyHubSpotUser from 'lib/identifyHubSpotUser'

import styles from 'styles/components/Subscribe.module.scss'

const FORM_ACTION = 'https://codecompetitor.us2.list-manage.com/subscribe/post?u=3fd10344aec009bbd8873553b&id=74e41d2051'
const FAKE_INPUT_NAME = 'b_3fd10344aec009bbd8873553b_74e41d2051'

const Subscribe = () => {
	const [email, setEmail] = useState('')
	
	const onSubmit = useCallback(() => {
		localStorage.setItem('email', email)
		identifyHubSpotUser(email)
	}, [email])
	
	const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}, [setEmail])
	
	return (
		<section className={styles.root}>
			<h3 className={styles.title}>
				Subscribe for news & updates
			</h3>
			<form
				className={styles.form}
				onSubmit={onSubmit}
				action={FORM_ACTION}
				method="POST"
				target="_blank"
			>
				<input
					className={styles.input}
					required
					type="email"
					name="EMAIL"
					placeholder="Email"
					value={email}
					onChange={onInputChange}
				/>
				<input name={FAKE_INPUT_NAME} tabIndex={-1} hidden />
				<button className={styles.button}>
					Submit
				</button>
			</form>
		</section>
	)
}

export default Subscribe
