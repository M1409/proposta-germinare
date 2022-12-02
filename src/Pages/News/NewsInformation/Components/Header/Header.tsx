import { News } from "../../../news";

export type HeaderProps = Pick<News, "title" | "section" | "publishedAt"> & React.HTMLProps<HTMLDivElement>

export function Header({title, section, publishedAt, ...props} : HeaderProps){
    return (
        <div {...props}>
            {title}
            {section}
            {publishedAt}
        </div>
    )
}