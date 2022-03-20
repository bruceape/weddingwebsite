import Link from 'next/link'
import styles from './home_nav.module.css'


export default function HomeNav({ children }) {
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/schedule">
						<a className={`${styles.link} neue-haas-regular`}>
							Schedule
						</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="https://www.youtube.com/watch?v=3hDS1v2xbjY">
						<a className={`${styles.link} neue-haas-regular`}>
							Watch Live
						</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="https://www.amazon.com/wedding/christina-glass-bruce-sullivan-san-francisco-may-2022/registry/26DZ9B91WPC3">
						<a className={`${styles.link} neue-haas-regular`}>
							Registry
						</a>
					</Link>
				</li>
{/*				<li className={styles.listItem}>
					<Link href="/todo">
						<a className={`${styles.link} neue-haas-regular`}>
							SF to do List
						</a>
					</Link>
				</li>*/}
{/*				<li className={styles.listItem}>
					<Link href="/guestbook">
						<a className={`${styles.link} neue-haas-regular`}>
							Guestbook
						</a>
					</Link>
				</li>*/}
			</ul>
		</div>
	)
}
