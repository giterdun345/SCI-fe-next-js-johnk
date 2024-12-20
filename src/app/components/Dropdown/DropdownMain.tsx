import React, { useState } from 'react';
import HpOptionList from './HpOptionList';

type DropdownProps = {
    onSelect: (selectedValue: string) => void;
};

export default function DropdownMain({ onSelect }: DropdownProps) {
    const [options, setOptions] = useState<string[]>([])

    return (
        <div className='max-w-full overflow-x-auto'>
            <div className="flex flex-col justify-center items-center">
                <h6 className="text-center text-lg font-semibold">Click an HP value to see matching cards</h6>
                <HpOptionList hpOptions={options} setOptions={setOptions} onSelect={onSelect} />
            </div>
        </div>
    );
}
