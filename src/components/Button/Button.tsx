import style from './Button.module.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    variant?: "filled" | "outlined";
    width?:string
    height?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button({ children, variant = "filled", width, height,  ...props }: ButtonProps) {
    return (
        <button className={`${style.button} ${style[variant]}`} style = {{width: width, height: height}} {...props}>
            {children}
        </button>
    )

}