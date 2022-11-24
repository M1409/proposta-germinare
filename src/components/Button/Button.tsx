import './style.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    variant: "button-filled" | "button-outlined"
    width?:string
    height?:string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function Button({ children, variant, width, height, ...props }: ButtonProps) {

    return (
        <button  {...props} className={variant} style = {{height: height, width: width}}>
            {children}
        </button>
    )

}