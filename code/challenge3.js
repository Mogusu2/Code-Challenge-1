function calculateNetSalary(basicSalary, benefits) {
  // PAYE tax brackets and rates
  const payeRates = [
    { upperLimit: 288000, rate: 0.1 },        // Up to 288,000 (10%)
    { upperLimit: 388000, rate: 0.25 },       // 288,001 - 388,000 (25%)
    { upperLimit: 6000000, rate: 0.30 },      // 388,001 - 6,000,000 (30%)
    { upperLimit: 9600000, rate: 0.325 },     // 6,000,001 - 9,600,000 (32.5%)
    { upperLimit: Infinity, rate: 0.35 }     // Above 9,600,000 (35%)
  ];

  const SHIF_RATE = 0.0275;  // effective 1st October
  const NSSF_RATE = 0.06;    // employer and employee contribution

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Function to calculate PAYE based on salary
  function calculatePaye(salary) {
    let paye = 0;
    let remainingSalary = salary;

    for (const bracket of payeRates) {
      if (remainingSalary > bracket.upperLimit) {
        const taxableAmount = bracket.upperLimit;
        paye += taxableAmount * bracket.rate;
        remainingSalary -= taxableAmount;
      } else {
        paye += remainingSalary * bracket.rate;
        break;
      }
    }
    return paye;
  }

  // Calculate deductions
  const payee = calculatePaye(grossSalary);  // PAYE deduction based on progressive rates
  const shifDeductions = grossSalary * SHIF_RATE;
  const nssfDeductions = grossSalary * NSSF_RATE;

  // Calculate net salary
  const netSalary = grossSalary - payee - shifDeductions - nssfDeductions;

  // Create an object to store the results
  const results = {
    grossSalary,
    payee,
    shifDeductions,
    nssfDeductions,
    netSalary,
  };

  return results;
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
const netSalaryInfo = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", netSalaryInfo.grossSalary);
console.log("PAYE:", netSalaryInfo.payee);
console.log("SHIF Deductions:", netSalaryInfo.shifDeductions);
console.log("NSSF Deductions:", netSalaryInfo.nssfDeductions);
console.log("Net Salary:", netSalaryInfo.netSalary);
