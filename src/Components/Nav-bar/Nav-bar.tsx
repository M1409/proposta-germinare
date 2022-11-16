import './style.scss';
import { LogoGerminare } from '../../assets/logoGerminare.svg';
import '../Button'


type NavBar = {
    navItems: {
        label?: string;
        url?: string; //rota
        CustomItem?: React.ReactNode;
    }[]
}

export function NavBar({ navItems }: NavBar) {
    return (
        <div>
            <img src={LogoGerminare} />
            <ul>
                {navItems.map(({ label, url, CustomItem }) => {
                    if (CustomItem) {
                        return <li>{CustomItem}</li>
                    }
                    else {
                        <li><a href={url}>{label}</a></li>
                    }
                })}
            </ul>
        </div>
    )
}

