import styles from './home_ceremony.module.css'


export default function HomeCeremony({ children }) {
	return (
		<div className={styles.container}>
			<h3 className={`${styles.title} neue-haas-italic`}>
				Ceremony
			</h3>
			<ul className={`${styles.times} neue-haas-regular`}>
				<li>Battery Mendell</li>
				<li>Fort Barry, Mendell Rd, Northwest, CA 94950</li>
				<li><time dateTime="2022-28-05">Saturday, May 28</time></li>
				<li><time dateTime="15:00">3:00 PM PT</time> / <time dateTime="18:00">6:00 PM ET</time></li>
			</ul>
		</div>
	)
}
