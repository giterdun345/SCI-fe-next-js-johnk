import HpOptionList from './HpOptionList';
import { MainPageType } from '@customTypes/MainPageTypes';

export function DropdownMain({ onSelect, hpOptions, errorMessage }: MainPageType) { // no more levels of prop passing!
    return (
        <div className='max-w-full overflow-x-auto'>
            <div className="flex flex-col justify-center items-center">
                <h6 className="text-center text-lg font-semibold">{hpOptions.length > 0 ? "No Hp values are available, please click the button to get more." : "Click an HP value to see matching cards"}</h6>
                <HpOptionList onSelect={onSelect} hpOptions={hpOptions} errorMessage={errorMessage} />
            </div>
            {errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Holy smokes!</strong>&nbsp;
                <span className="block sm:inline">Error: {errorMessage}</span>
            </div>}
        </div>
    );
}