import styles from './home_reception.module.css'


export default function HomeReception({ children }) {
	return (
		<div className={styles.container}>
			<h3 className={`${styles.title} neue-haas-italic`}>
				Reception
			</h3>
			<ul className={`${styles.times} neue-haas-regular`}>
				<li>Foreign Cinema</li>
				<li><time dateTime="2022-28-05">Saturday, May 28</time></li>
				<li><time dateTime="18:30">6:30 PM PT</time></li>
			</ul>
		</div>
	)
}
