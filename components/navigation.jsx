import Link from 'next/link'
import styles from './navigation.module.css'
import { Context } from './AppStateProvider'
import React from 'react'



function Sheet({ currentPage, open }) {
	const { state, closeMenu } = React.useContext(Context)
	const cl = state.menuOpen ? styles.menuBtnOpen : ''

	return (
		<div 
			className={`${styles.sheet} ${ open ? '' : styles.hidden}`}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

{/*				<button 
					className={`
						${styles.menuBtn}
					`}
					onClick={closeMenu}>
				</button>*/}
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
					<Link href="https://www.instagram.com/bruceandchristina/?igshid=YmMyMTA2M2Y=">
						<a className={styles.menuLink}>Watch Live</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.amazon.com/wedding/christina-glass-bruce-sullivan-san-francisco-may-2022/registry/26DZ9B91WPC3">
						<a className={styles.menuLink}>Registry</a>
					</Link>
				</li>
				<li>
					<Link href="https://airtable.com/shrk3PkNmTKhtv2Qw">
						<a className={styles.menuLink}>RSVP</a>
					</Link>
				</li>
				<li>
					<Link href="https://www.notion.so/christinaglass/Our-SF-List-6551accdad834d53b5805a3cd0b9cf01">
						<a className={styles.menuLink}>SF to do List</a>
					</Link>
				</li>
				<li>
					<Link href="https://airtable.com/shrLe9EkseXJxdS6T">
						<a className={styles.menuLink}>Guestbook</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}

function MobileNav({ currentPage }) {
	const { state, openMenu, closeMenu } = React.useContext(Context)
	const cl = state.menuOpen ? styles.menuBtnOpen : ''
	const action = state.menuOpen ? closeMenu : openMenu

	return (
		<div className={styles.mobileContainer}>
			<div className={styles.header}>
				<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>

				<button 
					className={`
						${styles.menuBtn}
						${cl}
					`}
					onClick={action}>
				</button>
			</div>


			<Sheet
				currentPage={currentPage}
				open={state.menuOpen} />
		</div>
	)
}

function DesktopNav({ currentPage }) {
	return (
		<div className={styles.desktopContainer}>
			<h1 className={`${styles.heading} garamond-regular`}>{currentPage}</h1>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<Link href="/">
						<a className={`${styles.link} neue-haas-regular`}>
							Home
						</a>
					</Link>
				</li>
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

export default function Navigation({ currentPage }) {
	const { state, openMenu, closeMenu } = React.useContext(Context)
	const cl = state.menuOpen ? styles.menuBtnOpen : ''
	const action = state.menuOpen ? closeMenu : openMenu

	return (
		<div className={styles.container}>
			<MobileNav currentPage={currentPage} />
			<DesktopNav currentPage={currentPage} />
		</div>
	)
}
