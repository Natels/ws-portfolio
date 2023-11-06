import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Selected Work</h2>
      <h3>Sleeve Packaging</h3>
      <h4>Client: Aurora Chocolate</h4>
      <p className={styles.description}>some text about this project</p>
      <h3>Restaurant Menu</h3>
      <h4>Client: Payasa Lane</h4>
      <p className={styles.description}>some text about this project</p>
      <h3>Animal Stickers</h3>
      <h4>Client: Lone Pine Koala Sanctuary</h4>
      <p className={styles.description}>some text about this project</p>
      <h3>Brand Logo & Pattern</h3>
      <h4>Client: Oopsie Daisy</h4>
      <p className={styles.description}>some text about this project</p>
      <h3>Type Card</h3>
      <h4>Client: Flash Skills</h4>
      <p className={styles.description}>some text about this project</p>
    </main>
  )
}
