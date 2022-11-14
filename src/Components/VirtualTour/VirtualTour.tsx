import { useState } from 'react';
import './style.scss'

export type VirtualTour = {
    tours: {
        location: string;
        src: string;
    }[];
}

export function VirtualTour({ tours }: VirtualTour) {
    const [currentLocationSrc, setCurrentLocationSrc] = useState(tours[0].src)

    return (
        <div className='virtual-tour-container'>
            <div>
                {tours.map(({ location, src }, index) => {
                    return <button key={index} onClick={() => { setCurrentLocationSrc(src) }}>{location}</button>
                })}
            </div>
            <iframe src={currentLocationSrc} style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    )
}