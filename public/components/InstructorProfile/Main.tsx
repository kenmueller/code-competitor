import { useRouter } from 'next/router'
import Img, { Svg } from 'react-optimized-image'

import Instructor from 'models/Instructor'
import facebook from 'images/icons/facebook.svg'
import twitter from 'images/icons/twitter.svg'
import instagram from 'images/icons/instagram.svg'

import styles from 'styles/components/InstructorProfile/Main.module.scss'

export interface InstructorProfileMainProps {
	user: Instructor
}

const InstructorProfileMain = ({ user }: InstructorProfileMainProps) => {
	const slug = useRouter().query.slug as string
	
	return (
		<main className={styles.root}>
			<aside className={styles.aside}>
				<Img
					className={styles.image}
					src={require(`images/instructors/${slug}.jpg`)}
					alt={user.name}
					webp
				/>
				<label className={styles.contactLabel}>
					Get in touch
				</label>
				<div className={styles.contactLinks}>
					<a href="#">
						<Svg src={facebook} />
					</a>
					<a href="#">
						<Svg src={twitter} />
					</a>
					<a href="#">
						<Svg src={instagram} />
					</a>
				</div>
			</aside>
			<article className={styles.main}>
				<h1 className={styles.name}>{user.name}</h1>
				<p className={styles.bio}>{user.bio}</p>
				<div className={styles.infoContainer}>
					<div className={styles.info}>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>C++ experience</p>
							<p className={styles.infoValue}>{user.cppExperience}</p>
						</div>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>Academic background</p>
							<p className={styles.infoValue}>{user.academicBackground}</p>
						</div>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>Competition background</p>
							<p className={styles.infoValue}>{user.competitionBackground}</p>
						</div>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>Open source projects</p>
							<p className={styles.infoValue}>{user.openSourceProjects}</p>
						</div>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>Past employers</p>
							<p className={styles.infoValue}>{user.pastEmployers}</p>
						</div>
						<div className={styles.infoRow}>
							<p className={styles.infoKey}>Hobbies</p>
							<p className={styles.infoValue}>{user.hobbies}</p>
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}

export default InstructorProfileMain
