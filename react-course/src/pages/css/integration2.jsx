import styles from "./integration2.module.css"; //.module para css especificos de componentes

export default function integration() {
  return (
    <div id={styles.integration2}>
      <div className={styles.laranja}>Text #01</div>
      <div className={styles.branco}>Text #02</div>
      <div className={styles.amarelo}>Text #03</div>
    </div>
  );
}
