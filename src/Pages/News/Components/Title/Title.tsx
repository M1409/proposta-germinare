export type TitleProps = {
  title: string;
} & React.HTMLProps<HTMLDivElement>;

export function Title({ title, ...props }: TitleProps) {
  return (
    <div {...props}>
      <h1 style={{fontSize: '32px', color: '#011689', fontWeight: 'bold'}}>{title}</h1>
      <hr style={{border: '1px solid #011689'}}/>
    </div>
  );
}
