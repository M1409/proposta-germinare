import { Link } from "react-router-dom";
import "./Breadcrumbs.module.scss";
import { useRouter } from "../../hooks/useRouter";

export type BreadcrumbsProps = {
  crumbInitialColor?: string;
};

export type CrumbProps = {
  href: string;
  label: string;
  color?: string;
  separator?: string;
};

export function Crumb({ href, color, label, separator = "|" }: CrumbProps) {
  return (
    <Link
      className="crumbs"
      to={href}
      style={{ textDecoration: "none", color: color }}
    >
      {` ${separator} ${label}`}
    </Link>
  );
}

export function Breadcrumbs({
  crumbInitialColor = "white",
  ...props
}: BreadcrumbsProps) {
  const [routes] = useRouter();

  return (
    <div {...props}>
      <Crumb
        color={crumbInitialColor}
        separator=""
        href={routes[0].href}
        label={routes[0].label}
      />
      {routes.slice(1).map((it) => (
        <Crumb color="#95A5FC" {...it} />
      ))}
    </div>
  );
}
