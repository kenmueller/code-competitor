import { Svg } from 'react-optimized-image'
import cx from 'classnames'

import trophy from 'images/icons/trophy.svg'
import strength from 'images/icons/strength.svg'

import styles from 'styles/components/Home/Info.module.scss'

const HomeInfo = () => (
	<section className={styles.root}>
		<h3 className={styles.title}>
			We will <strong>arm</strong> you with the <em>computer science<br />and programming knowledge, skills, and tools</em><br />to <strong>compete</strong> at the highest high school level
		</h3>
		<div className={styles.boxes}>
			<article className={styles.box}>
				<Svg className={cx(styles.boxIcon, styles.boxIcon_left)} src={trophy} />
				<p className={styles.boxTitle}>
					If you'd like to <span className={styles.boxTitleEmphasized}>compete</span><br />you will be <em>well-prepared</em>
				</p>
			</article>
			<article className={styles.box}>
				<Svg className={cx(styles.boxIcon, styles.boxIcon_right)} src={strength} />
				<p className={styles.boxTitle}>
					If you want the <span className={styles.boxTitleEmphasized}>skills</span>, without the<br />competition, you will gain <em>problem solving<br />and coding</em> abilities for <em>any</em> project
				</p>
			</article>
		</div>
	</section>
)

export default HomeInfo
