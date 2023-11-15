import Image from 'next/image'
import styles from './page.module.css'
import aurora from '../public/SleevePackagingImage.png'
import stickers from '../public/AnimalStickersImage.png'
import menu from '../public/RestaurantMenuImage.png'
import brandingPackaging from '../public/BrandLogo&PackagingImage.png'
import brandingPattern from '../public/BrandLogo&PatternImage.png'
import typeCard from '../public/TypeCardImage.png'
import Header from './header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
          <h2>Selected Work</h2>
          <h3>Sleeve Packaging</h3>
          <h4>Client: Aurora Chocolate</h4>
          <Image src={aurora} alt='Chocolate sleeve packaging project' width={400} height={300} />
          <p className={styles.description}>My goal with this project’s art style was to subvert expectations, be surprising and exciting, but fulfil the brief. The client wanted some packaging that would stand out from its competitors and be full of energy. I designed this trio of chocolate sleeve packaging with a bright and fun, oversized graphic type heading, creating a unique illustrative element across the brand.</p>
          <h3>Restaurant Menu</h3>
          <h4>Client: Payasa Lane</h4>
          <Image src={menu} alt='Restaurant menu images' width={400} height={300} />
          <p className={styles.description}>I created a very professional and sleek looking menu design for an informal bar & Mexicali restaurant, Payasa Lane. My aim was upmarket, with a little edge. I focused on hierarchy, so the layout strikes a balance between aesthetic beauty and contrast of a design but is also made legible. The colour palette I created has depth while looking fresh & modern.</p>
          <h3>Animal Stickers</h3>
          <h4>Client: Lone Pine Koala Sanctuary</h4>
          <Image src={stickers} alt='Sticker graphics of animals' width={400} height={300} />
          <p className={styles.description}>I designed three children’s stickers that feature illustrative characters of animals that live at Lone Pine Koala Sanctuary. For this project I used a cartoon style that would be playful for children, and I chose to add some simple line art to finish off the designs. I created these stickers using Adobe Illustrator.</p>
          <h3>Brand Logo & Pattern</h3>
          <h4>Client: Oopsie Daisy</h4>
          <Image src={brandingPattern} alt='Logo and pattern for a floral business' width={400} height={300} />
          <p className={styles.description}>My client wanted a fun and feminine logo for their new floral business. I created a combo logo with a blocked wordmark and special pictorial element. With my bright and playful colour palette and flower inspired illustrations, I created a repeated pattern for the brand to use on flower wrapping and other products.</p>
          <h3>Type Card</h3>
          <h4>Client: Flash Skills</h4>
          <Image src={typeCard} alt='Image of flashcards of fonts' width={400} height={300} />
          <p className={styles.description}>I was approached by an educational game company and asked to create artwork that would be included in a deck of flash cards based on Fonts. I designed two cards based on the fonts utilising the style guide provided to me. I was able to create some simple and effective cards that express the style and attitude of each typeface. I also assembled a repeated pattern to present each typeface.</p>
      </main>
    </>
  )
}
