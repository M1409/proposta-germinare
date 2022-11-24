import style from './Button.module.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    variant?: "filled" | "outlined";
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({ children, variant = "filled",  ...props }: ButtonProps) {
    return (
        <button className={`${style.button} ${style[variant]}`} {...props}>
            {children}
        </button>
    )

}