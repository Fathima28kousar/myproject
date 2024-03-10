import styles from './Hero.module.css'
import Button from '../button/Button'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.image}>
        <img src='/images/Hero.png' alt='Hero'/>
      </div>
      <div className={styles.content}>
        <img src='/images/leaf.png' alt='leaf'/>
        <h5>Best Quality Products</h5>
        <h1>Join The Organic Movement!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo .</p>
        <Button text='SHOP NOW' icon='cart' iconSize='20px'/> 
      </div>
    </div>
  )
}

export default Hero
