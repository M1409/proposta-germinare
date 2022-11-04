import './style.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    content: string
    variant: "button-filled" | "button-outlined"
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ content, variant, ...props }: ButtonProps) {

    return (
        <button  {...props} className={variant}>
            {content}
        </button>
    )

}