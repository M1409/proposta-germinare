import Button from '../Button/Button';

export function NavBarFilled() {
    const navItems = [
        {
            label: "inicoo",
            url: "inicio",
        },
        {
            customItem: <Button variant="button-outlined">Admissão</Button>
        },

    ]

    return (
        <NavBar navItems={navItems} />
    )
}