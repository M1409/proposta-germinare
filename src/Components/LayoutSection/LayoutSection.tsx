import './style.scss'

export type BlueSectionProps = {
    src?: string
    height?: string
} & any

export function LayoutSection({children, src, color, height, ...props}:BlueSectionProps){

    return (
        <div className='LayoutSection' style = {{backgroundImage: ` url(${src})`,  height: height }} {...props}>
            <span>
                <div>
                    {children}
                </div>
            </span>
        </div>
    )
}