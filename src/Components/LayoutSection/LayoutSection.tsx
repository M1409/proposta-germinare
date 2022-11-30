import styles from './LayoutSection.module.scss'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

export type LayoutSectionProps = {
    src?: string
    height?: string
    color?: string
    shadow?: boolean
    position? : 'absolute' | 'static'
} &  DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function LayoutSection({children, src, color, height, shadow, position='static', ...props}:LayoutSectionProps){

    return (
        <div className={styles.LayoutSection } style = {{backgroundImage: ` url(${src})`,height: height}} {...props}>
            <div style = {{backgroundColor: color, position: position}} className={styles.bg}>
                <div>
                    {children}
                </div>
            </div>
            {shadow? <div className={styles.backgroundShadow}></div> : <></>}
        </div>
    )
}