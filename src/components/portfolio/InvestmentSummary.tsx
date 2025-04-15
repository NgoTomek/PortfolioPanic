
import { formatCurrency } from '@/utils/marketLogic';
import { ArrowUp, ArrowDown, Wallet, DollarSign } from 'lucide-react';

interface InvestmentSummaryProps {
  totalInvested: number;
  netWorth: number;
  cash: number;
}

const InvestmentSummary = ({ totalInvested, netWorth, cash }: InvestmentSummaryProps) => {
  const investedPercentage = netWorth > 0 ? (totalInvested / netWorth * 100) : 0;
  const cashPercentage = netWorth > 0 ? (cash / netWorth * 100) : 0;
  
  // Determine if we should show warning for cash levels
  const lowCash = cashPercentage < 10;
  const highCash = cashPercentage > 50;
  
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-lg bg-indigo-900/30 border border-indigo-800/30">
        <div className="flex justify-between items-center">
          <div className="text-sm text-indigo-200 font-medium flex items-center">
            <DollarSign size={14} className="mr-1 text-indigo-400" />
            Invested
          </div>
          <div className="text-xs px-1.5 py-0.5 rounded-full bg-indigo-900/60 border border-indigo-700/30 text-indigo-200">
            {investedPercentage.toFixed(1)}% of portfolio
          </div>
        </div>
        <div className="text-2xl font-bold mt-1 text-white">
          {formatCurrency(totalInvested)}
        </div>
      </div>
      
      <div className={`p-4 rounded-lg ${
        lowCash 
          ? 'bg-red-900/30 border border-red-800/30' 
          : highCash 
            ? 'bg-amber-800/30 border border-amber-700/30' 
            : 'bg-green-900/30 border border-green-800/30'
      }`}>
        <div className="flex justify-between items-center">
          <div className={`text-sm font-medium flex items-center ${
            lowCash ? 'text-red-200' : highCash ? 'text-amber-200' : 'text-green-200'
          }`}>
            <Wallet size={14} className={`mr-1 ${
              lowCash ? 'text-red-400' : highCash ? 'text-amber-400' : 'text-green-400'
            }`} />
            Available Cash
          </div>
          <div className={`text-xs px-1.5 py-0.5 rounded-full ${
            lowCash 
              ? 'bg-red-900/60 border border-red-700/30 text-red-200' 
              : highCash 
                ? 'bg-amber-900/60 border border-amber-700/30 text-amber-200'
                : 'bg-green-900/60 border border-green-700/30 text-green-200'
          }`}>
            {cashPercentage.toFixed(1)}% of portfolio
          </div>
        </div>
        <div className="text-2xl font-bold mt-1 text-white">
          {formatCurrency(cash)}
        </div>
        
        {lowCash && (
          <div className="mt-1 text-xs text-red-300 flex items-center">
            <ArrowDown size={10} className="mr-0.5" />
            Low on cash for new opportunities
          </div>
        )}
        
        {highCash && (
          <div className="mt-1 text-xs text-amber-300 flex items-center">
            <ArrowUp size={10} className="mr-0.5" />
            Consider investing more cash
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestmentSummary;
