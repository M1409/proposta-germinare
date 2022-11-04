import './style.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type BlueSectionProps = {
    src?: string
    height?: string
    color?: string
} &  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function LayoutSection({children, src, color, height, ...props}:BlueSectionProps){

    return (
        <div className='layout-section' style = {{backgroundImage: ` url(${src})`,height: height}} {...props}>
            <span style = {{backgroundColor: color}}>
                <div>
                    {children}
                </div>
            </span>
        </div>
    )
}