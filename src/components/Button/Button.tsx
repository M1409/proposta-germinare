
import './style.scss'

export type ButtonProps = {
    content: string
    variant: "button-filled" | "button-filled-tech" | "button-outlined" 
} 

export default function Button({ content, variant, ...props }: ButtonProps) {

    return (
            <button  {...props} className={variant}>
                {content}
            </button>
    )

}