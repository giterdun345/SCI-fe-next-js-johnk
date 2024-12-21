import React, { useState, useEffect } from 'react';
import { cn } from "@libs/utils";
import OrientatedImage from './OrientatedImage';
import CardBack from './CardBack';
import type { CardData } from "@customTypes/CardTypes";

interface FlipCardProps extends CardData, React.HTMLAttributes<HTMLDivElement> { }

/**
 *  This component takes the CardData and splits it between front card and back card. The Front card is the image
 * and the rest of the props are seen on the back of the card. The dimensions of the image dictate the dimensions
 * and orientation of the card.
 *  
 */
export default function FlipCard({ name: title, set, cost, power, hp, type, traits, rarity, frontArt, className, ...props }: FlipCardProps) {
  const [orientation, setOrientation] = useState<'landscape' | 'portrait' | 'square' | null>(null);
  const [randomRotationAngle, setRandomRotation] = useState(0);

  const cardMainContainerClasses = cn(
    'group relative rounded-2xl transition-all duration-500 [perspective:1000px]',
    className,
    {
      'h-[300px] w-[450px]': orientation === 'landscape',
      'h-[450px] w-[300px]': orientation === 'portrait',
    }
  );

  const rotationClassMap = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };

  const rotationClass = rotationClassMap[Math.random() < 0.5 ? "x" : "y"]; // random pick of the x- left to right rotation or y- updown rotation

  const getRandomRotation = () => {
    return Math.random() * 6 - 3; // Random value between -3 and 3 degrees
  };

  useEffect(() => {
    setRandomRotation(getRandomRotation());
  }, []);

  return (
    <div className={cardMainContainerClasses} style={{ transform: `rotate(${randomRotationAngle}deg)` }} {...props}>
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          rotationClass[0],
        )}
      >
        {/* Front of the card is image*/}
        <OrientatedImage frontArt={frontArt} title={title} setOrientation={setOrientation} />
        <div
          className={cn(
            "absolute size-full rounded-2xl bg-black/80 p-1 text-slate-200 [backface-visibility:hidden] overflow-auto",
            rotationClass[1],
          )}
        >
          <div className="flex min-h-full flex-col gap-1">
            <h1 className="text-xl font-bold text-white text-center">{title}</h1>
            <div className="group flex flex-col items-center gap-1">
              <CardBack set={set} type={type} traits={traits} cost={cost} power={power} hp={hp} rarity={rarity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
