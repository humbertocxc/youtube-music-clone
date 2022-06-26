import styles from './styles.module.scss'

interface LogoProps {
  size: string,
  alt: string
}


export default function Logo({ size, alt }: LogoProps) {
  return (
    <button className={styles.button}>
      <img src='imgs/user.jpg' alt={alt} height={size} />
    </button>
  )
}