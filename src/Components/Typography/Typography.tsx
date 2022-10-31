import './style'

export type TypographyProps = {
    content?:string
    variant?: 'typography-paragraph' | 'typography-subtitle' | 'typography-title'
}


export function Typography({content,variant,...props}:TypographyProps){
    return (
        <p {...props} className = {variant}> {content} </p>
    )
}