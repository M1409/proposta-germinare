import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useRouter(){

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

    return pathList

}