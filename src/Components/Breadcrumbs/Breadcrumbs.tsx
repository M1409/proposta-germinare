import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function Breadcrumbs() {

    const router = useLocation()
    const pathList = useMemo(()=> {
        const paths:any[] = []
        let pathing = ''
        router.pathname.slice(1, router.pathname.length).split('/').forEach(path => {
            pathing += '/'+path
            paths.push({href: pathing, label: path.replace('-', ' ').replace('-', ' ').replace(path[0], path[0].toUpperCase())})
        })
        return paths
    }, [router])

    console.log(pathList)

    return (
        <>

            {pathList.map(path =>(
                <Link to={path.href}>
                    {path.label}
                </Link>
            ))}

        </>
    )

}