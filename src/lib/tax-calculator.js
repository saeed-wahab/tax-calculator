const TAX_TABLE = [
[319,0],
[100,5],
[120,10],
[3000,17.5],
[16461,25],
[Number.POSITIVE_INFINITY, 30]
]
const SSNIT = 5.5/100;

// For total cash deduction
function taxCalculator(salary,allowance){
  
  const  ssnit = salary * SSNIT;
  const taxableIncome = (salary + allowance) - ssnit;
  return {
  ssnitDeduction: ssnit,
  ...computeTax(TAX_TABLE,taxableIncome),
  }

}

//procedure to calcate tax deduction on GRA graduated tax rate

function computeTax(table, income, allowance){
    let taxableIncome = income,
    totalTax =0,
    taxSteps=[];
    if(taxableIncome > 0){
          for(var row=0; row < table.length; row++){
              let [taxableAmount, taxRate]= table[row],

              taxable = (taxableIncome > taxableAmount)
              ? taxableAmount : taxableIncome;

              var trancheTax = (taxable * taxRate)/100;
              if(taxable) taxSteps.push({chargeable:taxable, rate:taxRate, tax:trancheTax});
              totalTax += trancheTax;
              taxableIncome -=taxable;
          }
    } 
    return {
      netIncome: (income - totalTax),
      taxDeduction:totalTax,
      graduatedTaxRate:taxSteps,
    }
}

export default taxCalculator;
