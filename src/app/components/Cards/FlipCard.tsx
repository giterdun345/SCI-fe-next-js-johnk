import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from "@libs/utils";
import type { CardData } from "@customTypes/CardTypes";
import OrientatedImage from './OrientatedImage';

interface FlipCardProps extends CardData, React.HTMLAttributes<HTMLDivElement> {
  rotate?: "x" | "y";
}

export default function FlipCard({ name: title, set, cost, power, hp, type, traits, rarity, frontArt, rotate = 'y', className, ...props }: FlipCardProps) {
  const [orientation, setOrientation] = useState<'landscape' | 'portrait' | 'square' | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0); // Track random rotation angle

  const cardClasses = cn(
    'group relative rounded-2xl transition-all duration-500 [perspective:1000px]',
    className,
    {
      'h-[300px] w-[450px]': orientation === 'landscape',
      'h-[450px] w-[300px]': orientation === 'portrait',
    }
  );

  const rotationClass: any = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random value between -3 and 3
  };

  // Set the random rotation when the component mounts
  useEffect(() => {
    setRotationAngle(getRandomRotation());
  }, []);
  return (
    <div className={cardClasses} style={{ transform: `rotate(${rotationAngle}deg)` }} {...props}>

      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0],
        )}

      >
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <OrientatedImage frontArt={frontArt} title={title} setOrientation={setOrientation} orientation={orientation} />

          {/* <div className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</div> */}
        </div>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
            self[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-xl font-bold text-white">{title}</h1>
            <div className="group flex items-center gap-2">

              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Set: {set}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Type: {type}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Traits: {traits}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Cost: {cost}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Power: {power}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                HP: {hp}
              </p>
              <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                Rarity: {rarity}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
