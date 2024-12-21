import type { CardData } from "@customTypes/CardTypes";

type LabelType = 'set' | 'type' | 'traits' | 'cost' | 'power' | 'hp' | 'rarity'
type CardBackProps = Pick<CardData, LabelType>


const CardDetail = ({ label, value }: { label: LabelType; value: string | number | string[] }) => (
    <p className="mt-1 size-full border-t border-t-gray-200 py-2 text-base font-medium leading-normal text-gray-100">
        {label}: {value}
    </p>
);

export default function CardBack({ set, type, traits, cost, power, hp, rarity }: CardBackProps) {
    const cardDetails = [
        { label: "Set", value: set },
        { label: "Type", value: type },
        { label: "Traits", value: traits },
        { label: "Cost", value: cost?.toLocaleString("en-US", { style: "currency", currency: "USD" }) },
        { label: "Power", value: power },
        { label: "HP", value: hp },
        { label: "Rarity", value: rarity },
    ];

    return (
        <>
            {cardDetails.map((detail) => (
                <CardDetail key={detail.label} label={detail.label as LabelType} value={detail.value} />
            ))}
        </>
    );
}