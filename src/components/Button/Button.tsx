import './style.scss'

export type ButtonProps = {
    content: string
    variant: "filled" | "outlined"
}  

export default function Button({ content, variant, ...props }: ButtonProps) {

    return (
        variant === 'filled' ?

            <button  {...props} className='button-filled'>
                {content}
            </button>

            :

            <button  {...props} className='button-outlined'>
                {content}
            </button>
    )

}