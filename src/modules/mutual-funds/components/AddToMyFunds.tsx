import { useState } from "react";
import { useInvestmentStore } from "../store";
import type { MutualFundScheme } from "../types/mutual-funds";
import AddInvestmentModal from "./AddInvestmentModal";

export default function AddToMyFunds({ scheme }: { scheme: MutualFundScheme }) {

    const [showModal, setShowModal] = useState(false);

    const { addInvestment } = useInvestmentStore();

    const handleAddInvestment = (investment: any) => {
        addInvestment(scheme.schemeCode, investment);
        setShowModal(false);
    };
    const addToMyFunds = ($event: React.MouseEvent<HTMLElement>) => {
        $event.stopPropagation();
        setShowModal(true);
    };
    return (
        <div className='flex justify-end'>
            <label
                role='button'
                onClick={addToMyFunds}
                className="w-full md:w-auto p-1 text-md text-primary hover:text-primary-dark cursor-pointer transition text-center font-bold"
            >
                + Add to My Funds
            </label>
            <AddInvestmentModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onSubmit={handleAddInvestment}
                schemeName={scheme.schemeName}
                schemeCode={scheme.schemeCode}
            />
        </div>
    );
}