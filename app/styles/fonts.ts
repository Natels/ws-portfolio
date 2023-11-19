import { Karla, Playfair } from "next/font/google";
import styles from '../page.module.css';

const playfair = Playfair({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})
const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla'
})

export { playfair, karla }
