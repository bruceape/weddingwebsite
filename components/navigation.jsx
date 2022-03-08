import Link from 'next/link'
import styles from './navigation.module.css'
import { Context } from './AppStateProvider'
import React from 'react'



function Sheet({ currentPage, open }) {
	const { state, closeMenu } = React.useContext(Context)

	return (
		<div 
			className={`${styles.sheet} ${ open ? '' : styles.hidden}`}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

				<button 
					className={styles.menuBtn}
					onClick={closeMenu}>
					Close
				</button>
			</div>

			<ul className={styles.menuList} onClick={closeMenu}>
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
	const { state, openMenu } = React.useContext(Context)

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

				<button 
					className={styles.menuBtn}
					onClick={openMenu}>
					Menu
				</button>
			</div>


			<Sheet
				currentPage={currentPage}
				open={state.menuOpen} />
		</div>
	)
}
