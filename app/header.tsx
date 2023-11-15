import Image from 'next/image'
import logo from '../public/Whitney Smith Green.svg'
import styles from './page.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
           <Image src={logo} alt='Whitney Smith Logo' className={styles.headerLogo} /> 
        </div>
    )
}