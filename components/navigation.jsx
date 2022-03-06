import Link from 'next/link'
import styles from './navigation.module.css'


export default function Navigation({ currentPage }) {
	return (
		<div className={styles.container}>
		{currentPage}
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
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
