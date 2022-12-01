import styles from "./Title.module.scss";

export type TitleProps = {
  title: string;
} & React.HTMLProps<HTMLDivElement>;

export function Title({ title, ...props }: TitleProps) {
  return (
    <div {...props}>
      <p className={styles.titleConfig}>{title}</p>
      <hr style={{border: '1px solid #011689'}}/>
    </div>
  );
}
