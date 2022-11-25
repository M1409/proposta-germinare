import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export type PathType = {
  href: string;
  label: string;
};

export function useRouter() {
  const { pathname } = useLocation();
  const pathList = useMemo(() => {
    const paths: PathType[] = [];
    let pathing = "";
    if (pathname !== "/") {
      pathname
        .slice(1, pathname.length)
        .split("/")
        .forEach((path) => {
          pathing += "/" + path;
          paths.push({
            href: pathing,
            label: decodeURI(
              path
                .replace("-", " ")
                .replace("-", " ")
                .replace(path[0], path[0].toUpperCase())
            ),
          });
        });
    }
    return paths;
  }, [pathname]);

  return [pathList];
}
