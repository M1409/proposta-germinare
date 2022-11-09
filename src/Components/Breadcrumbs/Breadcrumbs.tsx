import { Link } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";

export type BreadcrumbsProps = {

}

export function Breadcrumbs() {

    const [routes] = useRouter()

    function returnTest(item:any){
        if (routes.indexOf(item) === routes.length - 1){
            return <p> {item.label} / </p>
        }

        else{
            return <p> {item.label} </p>
        }
    }

    return (
        <div>
            {routes.map(item => (
                returnTest(item)
            ))}
        </div>
    )

}