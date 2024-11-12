import React from 'react';

type ItemWithButtonProps = {
    imageSrc: string;
    altText: string;
    name: string;
    onAdd: () => void;
};

const ItemWithButton: React.FC<ItemWithButtonProps> = ({ imageSrc, altText, name, onAdd }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 bg-white shadow-md border-2 rounded-lg">
            <div className="flex items-center md:mb-0">
                {/* Image */}
                <img src={imageSrc} alt={altText} className="w-16 h-16 md:w-20 md:h-20 mr-4" />
                {/* Nom */}
                <span className="text-gray-800 font-bold text-lg md:text-xl">
                    {name}
                </span>
            </div>
            {/* Bouton "Add to monday.com" */}
            <button
                onClick={onAdd}
                className="bg-white flex items-center text-gray-700 border-2 px-3 py-2 rounded-md font-medium focus:outline-none text-sm md:text-base"
            >
                Add to <img
                    src="/monday-logo.svg"
                    alt="Monday.com logo"
                    className="w-5 md:w-6 mx-2"
                /> <b>monday.com</b>
            </button>
        </div>
    );
};

export default ItemWithButton;
