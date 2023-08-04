import styles from "./styles.module.css";

export default function Hero() {
  return (
    <mark className={`max-lg:scale-75 ${styles.wrapper}`}>
      <h1 className={styles.h1}>Selam, ben Efe Mesudiyeli</h1>

      <p className={styles.p}>
        Web uygulamaları geliştirmeyi seven bir yazılım geliştiricisiyim.
        <br />
        Herhangi bir konuda bana efemesudiyeli@gmail.com adresinden
        ulaşabilirsiniz.
      </p>
    </mark>
  );
}
