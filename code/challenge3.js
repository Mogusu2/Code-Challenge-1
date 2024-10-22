function calculateNetSalary(basicSalary, benefits) {
  // Replace with actual KRA, NHIF, and NSSF rates obtained from a reliable source
  const PAYE_RATE = 0.3; // Hypothetical PAYE rate
  const NHIF_RATE = 0.05; // Hypothetical NHIF rate
  const NSSF_RATE = 0.06; // Hypothetical NSSF rate (employer and employee contribution)

  // Calculate gross salary, PAYE, NHIF deductions, and NSSF deductions
  const grossSalary = basicSalary + benefits;
  const payee = grossSalary * PAYE_RATE;
  const nhifDeductions = grossSalary * NHIF_RATE;
  const nssfDeductions = grossSalary * NSSF_RATE;

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Create an object to store the results
  const results = {
    grossSalary,
    payee,
    nhifDeductions,
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
console.log("NHIF Deductions:", netSalaryInfo.nhifDeductions);
console.log("NSSF Deductions:", netSalaryInfo.nssfDeductions);
console.log("Net Salary:", netSalaryInfo.netSalary);