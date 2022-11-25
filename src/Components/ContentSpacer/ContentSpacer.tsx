import styles from "./ContentSpacer.module.scss";

export type ContentSpacerProps = {} & React.HTMLProps<HTMLDivElement>;

export function ContentSpacer({ children, ...props }: ContentSpacerProps) {
  return <div className={styles.ContentSpacer} {...props}>{children}</div>;
}
