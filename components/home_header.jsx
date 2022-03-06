import styles from './home_header.module.css'


export default function HomeHeader({ children }) {
	return (
		<div className={styles.container}>
			<span className={`${styles.title} garamond-regular`}> The Wedding of  </span>
			<span className={`${styles.name} garamond-italic`}>Bruce & Christina</span>
		</div>
	)
}
