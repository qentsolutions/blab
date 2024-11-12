import React from 'react';
import { Check, X } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  subtitle: string;
  features?: Array<{
    text: string;
    included: boolean;
  }>;
  recommended?: boolean;
  buttonText?: string;
  link?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  subtitle,
  features,
  recommended = false,
  buttonText = "GET APP NOW",
  link
}) => {
  return (
    <div className={`m-4 rounded-3xl p-8 flex flex-col h-full ${recommended ? 'bg-[#3a84ba] text-white' : 'bg-white border-2'}`}>
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className={`text-sm ${recommended ? 'text-blue-100' : 'text-gray-500'}`}>{subtitle}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold">{price}</span>
          {price === '$5' && <p className="text-sm text-gray-500">Per month</p>}
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {feature.included ? (
              <Check className={`w-5 h-5 ${recommended ? 'text-blue-100' : 'text-blue-600'}`} />
            ) : (
              <X className={`w-5 h-5 ${recommended ? 'text-blue-100' : 'text-gray-400'}`} />
            )}
            <span className={feature.included ? '' : `${recommended ? 'text-blue-100' : 'text-gray-400'}`}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-6 rounded-full font-bold text-center transition-all 
          ${recommended
            ? 'bg-white text-[#3a84ba] hover:bg-blue-50'
            : 'bg-[#3a84ba] text-white hover:bg-blue-600'
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default PricingCard;
