"use client";
import React from 'react';
import Image from 'next/image';
import { CardData } from '../types/CardTypes';


export default function Card({ name, set, cost, power, hp, type, traits, rarity, frontArt }: CardData) {
    return (
        <div className="border border-gray-400 rounded-lg p-2 m-2 flex items-center bg-gray-800 text-white shadow-lg">
            {/* Left Image Section */}
            <div className="w-32 h-32 flex-shrink-0 mr-4">
                <Image src={frontArt} alt={name} className="object-cover rounded-lg" width={300} height={300} />
            </div>

            {/* Right Text Section */}
            <div className="flex flex-col justify-center">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-sm">Set: {set}</p>
                <p className="text-sm">Type: {type}</p>
                <p className="text-sm">Traits: {traits?.join(', ')}</p>
                <p className="text-sm">Cost: {cost}</p>
                <p className="text-sm">Power: {power}</p>
                <p className="text-sm">HP: {hp}</p>
                <p className="text-sm">Rarity: {rarity}</p>
            </div>
        </div>
    );
}
