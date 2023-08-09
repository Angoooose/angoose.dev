import { useEffect, useState } from 'react'

interface WindowDimensions {
    height: number;
    width: number;
}

const getDimensions = (): WindowDimensions => {
    return {
        height: window.innerHeight,
        width: window.innerWidth,
    }
}

export const useDimensions = () => {
    const [dimensions, setDimensions] = useState<WindowDimensions>({
        height: window.innerHeight,
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => setDimensions(getDimensions());

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimensions;
}