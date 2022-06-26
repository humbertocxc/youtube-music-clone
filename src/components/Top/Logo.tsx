import styles from './styles.module.scss'

interface LogoProps {
  size: string
}


export default function Logo({ size }: LogoProps) {
  return (
    <button className={styles.button}>
      <img src='imgs/user.jpg' alt="H" height={size} />
    </button>
  )
}