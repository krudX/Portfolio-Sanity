import styles from "./style.module.scss";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className={styles.button}>
      <div className={`backdrop-blur-medium ${isActive ? "bg-neutral-200" : "bg-overlay-light-neutral"} ${styles.slider}`}>
        <button
          data-hide-cursor
          onClick={() => {
            toggleMenu();
          }}
          className="hover:bg-neutral-400 transition-colors duration-650"
        >
          <div className={`bg-neutral-800 ${styles.line} ${isActive ? styles.lineActive : ""}`}></div>
          <div className={`bg-neutral-800 ${styles.line} ${isActive ? styles.lineActive : ""}`}></div>
        </button>
      </div>
    </div>
  );
}
