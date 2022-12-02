import styles from "./ToggleButton.module.scss";
type ToggleButtonProps = {
  toggle: (value: (prev: boolean) => boolean) => void;
};
export function ToggleButton({ toggle }: ToggleButtonProps) {
  return (
    <div className={styles.row}>
      <div className={styles.toggle_button_cover}>
        <div className={styles.button_cover}>
          <div className={styles.button} id={styles.button_10}>
            <input
              type="checkbox"
              onChange={() => {
                toggle((prev) => !prev);
              }}
              className={styles.checkbox}
            />
            <div className={styles.knobs}>
              <span>Doações Únicas</span>
            </div>
            <div className={styles.layer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
