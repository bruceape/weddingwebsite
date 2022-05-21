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
					<Link href="https://www.instagram.com/bruceandchristina/?igshid=YmMyMTA2M2Y=">
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
				<li className={styles.listItem}>
					<Link href="https://airtable.com/shrk3PkNmTKhtv2Qw">
						<a className={`${styles.link} neue-haas-regular`}>
							RSVP
						</a>
					</Link>
				</li>

				<li className={styles.listItem}>
					<Link href="https://www.notion.so/christinaglass/Our-SF-List-6551accdad834d53b5805a3cd0b9cf01">
						<a className={`${styles.link} neue-haas-regular`}>
							SF to do List
						</a>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link href="https://airtable.com/shrLe9EkseXJxdS6T">
						<a className={`${styles.link} neue-haas-regular`}>
							Guestbook
						</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}
