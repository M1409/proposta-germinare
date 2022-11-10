import { Link } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import './Breadcrumbs.module.scss'
import { PathType } from "../../hooks/useRouter";

export type BreadcrumbsProps = {
    crumbColor: string
    crumbInitialColor: string
}

export function Breadcrumbs({crumbColor,crumbInitialColor, ...props}:BreadcrumbsProps) {

    const [routes] = useRouter()

    function returnTest(item:PathType){
        let crumb = '|'
        let color = crumbInitialColor
        if (routes.indexOf(item) === routes.length - 1){
            crumb = ''
            color = crumbColor
        }
        return <Link className="crumbs" to = {item.href} style = {{textDecoration: 'none', color: color}}> {item.label + ' ' + crumb} </Link>
    }

    return (
        <div {...props}>
            {routes.map(item => (
                returnTest(item)
            ))}
        </div>
    )

}