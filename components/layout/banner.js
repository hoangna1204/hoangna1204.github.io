import styles from './Banner.module.scss'
import TypingEffect from "../typingEffect/typingEffect";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <TypingEffect text={"Hi! My name is Hoang Nguyen. Welcome to my profile!!!"} wordsPerSecond={12}/>
    </div>
  )
}
