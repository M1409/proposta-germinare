import styles from './LayoutSection.module.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type LayoutSectionProps = {
    src?: string
    height?: string
    color?: string
    shadow?: boolean
} &  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function LayoutSection({children, src, color, height, shadow, ...props}:LayoutSectionProps){

    return (
        <div className={styles.LayoutSection } style = {{backgroundImage: ` url(${src})`,height: height}} {...props}>
            <span style = {{backgroundColor: color}}>
                <div>
                    {children}
                </div>
            </span>
            {shadow? <div className={styles.backgroundShadow}></div> : <></>}
        </div>
    )
}