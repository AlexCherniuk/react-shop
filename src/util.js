export default function formatCurrency(num) {
    return Number(num.toFixed(8)).toLocaleString(8) + " грн";
    
} 
