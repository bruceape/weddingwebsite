import Link from 'next/link'
import styles from './navigation.module.css'


function closeMenu() {
	console.log('close menu')
}


function openMenu() {
	console.log('open menu')
}

function Sheet({ currentPage, open }) {
	return (
		<div 
			className={`${styles.sheet} ${ open ? '' : styles.hidden}`}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

				<button 
					className={styles.menuBtn}
					onClick={openMenu}>
					Open
				</button>
			</div>

			<ul className={styles.menuList}>
				<li>
					<Link href="/">
						<a className={styles.menuLink}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/schedule">
						<a className={styles.menuLink}>Schedule</a>
					</Link>
				</li>
				<li>
					<Link href="/watch">
						<a className={styles.menuLink}>Watch Live</a>
					</Link>
				</li>
				<li>
					<Link href="/registry">
						<a className={styles.menuLink}>Registry</a>
					</Link>
				</li>
{/*				<li>
					<Link href="/todo">
						<a className={styles.menuLink}>SF to do List</a>
					</Link>
				</li>
				<li>
					<Link href="/guestbook">
						<a className={styles.menuLink}>Guestbook</a>
					</Link>
				</li>*/}
			</ul>
		</div>
	)
}

export default function Navigation({ currentPage }) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

				<button 
					className={styles.menuBtn}
					onClick={openMenu}>
					Open
				</button>
			</div>


			<Sheet
				currentPage={currentPage}
				open={false} />
		</div>
	)
}
