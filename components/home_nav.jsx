import Link from 'next/link'
import styles from './home_nav.module.css'


export default function HomeNav({ children }) {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<Link href="/watch">Watch Live</Link>
				</li>
				<li>
					<Link href="/registry">Registry</Link>
				</li>
				<li>
					<Link href="/todo">SF to do List</Link>
				</li>
				<li>
					<Link href="/schedule">Schedule</Link>
				</li>
				<li>
					<Link href="/guestbook">Guestbook</Link>
				</li>
			</ul>
		</div>
	)
}
