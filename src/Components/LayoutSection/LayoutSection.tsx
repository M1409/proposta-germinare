import './style.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type LayoutSectionProps = {
    src?: string
    height?: string
    color?: string
} &  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function LayoutSection({children, src, color, height, ...props}:LayoutSectionProps){

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