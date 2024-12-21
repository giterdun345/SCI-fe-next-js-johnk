"use client"

import React, { useState } from 'react';
import { DropdownMain } from '@components/Dropdown/DropdownMain';
import CardList from '@components/Cards/CardList';
import { MainPageType } from '@customTypes/MainPageTypes';

export default function MainComponent({ hpOptions, errorMessage }: { hpOptions: MainPageType["hpOptions"], errorMessage: MainPageType["errorMessage"] }) {
    const [selectedHp, setSelectedHp] = useState<string>('');

    return (
        <div className="mt-3">
            <DropdownMain selected={selectedHp} onSelect={setSelectedHp} hpOptions={hpOptions} errorMessage={errorMessage} />
            {selectedHp && <CardList hp={selectedHp} />}
        </div>
    );
}