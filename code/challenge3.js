function calculateNetSalary(basicSalary, benefits) {
  const PAYE_RATE = 0.1; // Up to 288,000
  const SHIF_RATE = 0.0275; // effective 1st October
  const NSSF_RATE = 0.06; // employer and employee contribution

  // Calculate gross salary, PAYE, SHIF deductions, and NSSF deductions
  const grossSalary = basicSalary + benefits;
  const payee = grossSalary * PAYE_RATE;
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