import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'
function Showcase() {
  return (
    <div className={styles.showcase}>
          
          <div>
              <h2>Scholarship Portal</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eum veritatis, in harum vitae facere perspiciatis eveniet odio, nulla illo, nisi reprehenderit. Possimus maxime asperiores deserunt</p>
              <Link href="/scholarships">  
              <a><button>Explore</button></a>
              </Link>
              
          </div>
          <img  className={styles.img} src="/images/clip-applying-to-university-online (1).gif" alt=""/>
      </div>
  )
}

export default Showcase