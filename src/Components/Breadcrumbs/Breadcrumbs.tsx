import { Link } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";

export type BreadcrumbsProps = {
    crumbColor: string
}

export function Breadcrumbs({crumbColor, ...props}:BreadcrumbsProps) {

    const [routes] = useRouter()

    function returnTest(item:any){
        let crumb = '|'
        let color = 'inherit'
        if (routes.indexOf(item) === routes.length - 1){
            crumb = ''
            color = crumbColor
        }
        return <Link to = {item.href} style = {{textDecoration: 'none', color: color}}> {item.label + ' ' + crumb} </Link>
    }

    return (
        <div>
            {routes.map(item => (
                returnTest(item)
            ))}
        </div>
    )

}