import styles from './home_ceremony.module.css'


export default function HomeCeremony({ children }) {
	return (
		<div className={styles.container}>
			<h3 className={`${styles.title} neue-haas-italic`}>
				Ceremony
			</h3>
			<ul className={`${styles.times} neue-haas-regular`}>
				<li>Marin Headlands</li>
				<li><time datetime="2022-28-05">Saturday, May 28</time></li>
				<li><time datetime="15:00">3:00 PM PT</time> / <time datetime="18:00">6:00 PM ET</time></li>
			</ul>
		</div>
	)
}
