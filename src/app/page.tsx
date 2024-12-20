'use client';
import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import CardList from './components/CardList';

export default function Page() {
  const [selectedHp, setSelectedHp] = useState<string>('');

  return (
    <div  >
      <Dropdown onSelect={setSelectedHp} />
      {selectedHp && <CardList hp={selectedHp} />}
    </div>
  );
}
