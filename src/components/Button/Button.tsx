import './style.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    variant: "button-filled" | "button-outlined"
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ children, variant, ...props }: ButtonProps) {

    return (
        <button  {...props} className={variant}>
            {children}
        </button>
    )

}