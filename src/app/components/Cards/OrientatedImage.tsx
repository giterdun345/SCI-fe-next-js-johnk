import React, { useState } from 'react';
import Image from 'next/image';

interface OrientatedImageProps {
    frontArt: string;
    title: string;
    setOrientation: (orientation: "landscape" | "portrait") => void
}

/**
 * A component that identifies the width and height on image load from DOM and
 * applies an orientation not only to the image, but also to the card.
 */
const OrientatedImage = ({ frontArt, title, setOrientation }: OrientatedImageProps) => {
    const [imageDimensions, setImageDimensions] = useState({
        width: 300,
        height: 300,
    });

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        // @ts-expect-error 
        const { naturalWidth, naturalHeight } = e.target;
        if (naturalWidth > naturalHeight) {

            setImageDimensions({ width: 450, height: 300 });
            setOrientation("landscape")
        } else if (naturalWidth < naturalHeight) {

            setImageDimensions({ width: 300, height: 300, });
            setOrientation("portrait")
        }
    };

    return (
        <div className="absolute size-full [backface-visibility:hidden]">
            <Image
                src={frontArt}
                alt={title}
                width={imageDimensions.width}
                height={imageDimensions.height}
                className="object-cover rounded-lg"
                onLoad={handleImageLoad}
            />
        </div>
    );
};

export default OrientatedImage;
