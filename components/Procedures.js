import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'

function Procedures() {
  return (
    <div className={styles.procedures}>
          <div className={styles.procedure}>
            <img className={styles.img} src="/images/casual-life-3d-young-man-in-orange-headphones-sitting-at-green-table-and-using-computer.png" alt=""/>
            <div className={styles.div}>
                <h2>Apply</h2>
                <p>Complete your profile and gain free access to our scholarship database. We make it simple and match you to college scholarships you qualify for instantly.</p>
                <button>Sign up</button>
            </div>
          </div>
          <div className={styles.procedure}>
            
            <div className={styles.div}>
                <h2>Organize Your Scholarships</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis sapiente omnis nobis expedita ratione itaque deleniti sunt, laudantium repudiandae officia iure repellendus </p>
                <button>Sign up</button>
            </div>
            <img className={styles.img}  src="/images/casual-life-3d-woman-works-on-laptop-sitting-on-the-floor.png" alt=""/>
          </div>
          <div className={styles.procedure}>
            <img className={styles.img}  src="/images/casual-life-3d-young-man-holding-blue-smartphone.png" alt=""/>
            <div className={styles.div}>
                <h2>Apply For Scholarships</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis sapiente omnis nobis expedita ratione itaque deleniti sunt, laudantium repudiandae officia iure repellendus </p>
                <button>Sign up</button>
            </div>
          </div>
      </div>
  )
}

export default Procedures