"use client"

import React, { useState } from 'react';
import DropdownMain from './components/Dropdown/DropdownMain';
import CardList from './components/CardList';

export default function Page() {
  const [selectedHp, setSelectedHp] = useState<string>('');

  return (
    <>
      <DropdownMain onSelect={setSelectedHp} />
      {selectedHp && <CardList hp={selectedHp} />}
    </>
  );
}
