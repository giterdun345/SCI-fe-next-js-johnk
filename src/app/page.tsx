import React, { useState } from 'react';
import { DropdownMain } from '@components/Dropdown/DropdownMain';
import CardList from '@components/CardList';
import { MainPageType } from '@customTypes/MainPageTypes';


export default async function Page() {
  let hpOptions = []
  let errorMessage = ""

  try {
    const res = await fetch("https://api.swu-db.com/catalog/hps");

    if (!res.ok) {
      errorMessage = "Failed to fetch data from external API"
    }

    hpOptions = await res.json();

  } catch (error) {
    console.error("API Request Error:", error);
    errorMessage = "Error during data fetch"
  }

  return (
    <MainPage hpOptions={hpOptions} errorMessage={errorMessage} />
  );
}


function MainPage({ hpOptions, errorMessage }: { hpOptions: string[], errorMessage: string }) {
  const [selectedHp, setSelectedHp] = useState<string>('');

  return (
    <div>
      <DropdownMain onSelect={setSelectedHp} hpOptions={hpOptions} errorMessage={errorMessage} />
      {selectedHp && <CardList hp={selectedHp} />}
    </div>
  );
}

