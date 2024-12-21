import { useState } from 'react';
import Image from 'next/image';

interface WTF { width: number; height: number; orientation: any, }
const OrientatedImage = ({ frontArt, title, orientation, setOrientation }: { frontArt: string, title: string, orientation: any; setOrientation: any }) => {
    const [imageDimensions, setImageDimensions] = useState<WTF>({
        width: 300,
        height: 300,
        orientation: 'portrait',

    });

    // Handle image loading to set width/height based on orientation
    const handleImageLoad = (e: any) => {
        const { naturalWidth, naturalHeight } = e.target;
        console.log(naturalWidth, naturalHeight)
        if (naturalWidth > naturalHeight) {

            setImageDimensions({ width: 450, height: 300, orientation: 'landscape' });
            setOrientation("landscape")
        } else if (naturalWidth < naturalHeight) {

            setImageDimensions({ width: 300, height: 300, orientation: 'portrait' });
            setOrientation("portrait")
        }
    };

    return (
        <div className="relative">
            {/* Image with onLoad event to determine dimensions */}
            <Image
                src={frontArt}
                alt={title}
                width={imageDimensions.width}
                height={imageDimensions.height}
                className="object-cover rounded-lg"
                onLoad={handleImageLoad}
            />

            {/* Optionally display orientation */}
            <div className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {title} - {imageDimensions.orientation}
            </div>
        </div>
    );
};

export default OrientatedImage;
