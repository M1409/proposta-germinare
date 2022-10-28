import './style.scss'

export type ButtonProps = {
    content:string
} 

export default function Button({content,...props}:ButtonProps){

    


    return (
        <button  {...props} className='button-outlined'> 
            {content}
        </button>
    )

}