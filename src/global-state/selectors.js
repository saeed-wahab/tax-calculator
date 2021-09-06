export const selectTax=state=>state.taxDeducted.toFixed(2);
export const selectSsnit =state=> state.ssnit.toFixed(2);
export const selectIncome = state => state.netIncome.toFixed(2);
export const selectTaxTable = state => state.graduatedTaxRate;
