function calculateNSSF(grossSalary) {
    let tier1Limit = 8000, tier2Limit = 72000;
    let tier1Rate = 0.06, tier2Rate = 0.06;
    
    if (grossSalary <= tier1Limit) {
        return grossSalary * tier1Rate;
    } else if (grossSalary <= tier2Limit) {
        return (tier1Limit * tier1Rate) + ((grossSalary - tier1Limit) * tier2Rate);
    } else {
        return (tier1Limit * tier1Rate) + ((tier2Limit - tier1Limit) * tier2Rate);
    }
}

function calculateNHIF(grossSalary) {
    return grossSalary * 0.0275;
}

function calculatePAYE(taxableIncome) {
    let personalRelief = 2400;
    let tax = 0;

    if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.10;
    } else if (taxableIncome <= 32333) {
        tax = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25);
    } else if (taxableIncome <= 500000) {
        tax = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.30);
    } else if (taxableIncome <= 800000) {
        tax = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((taxableIncome - 500000) * 0.325);
    } else {
        tax = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) + ((800000 - 500000) * 0.325) + ((taxableIncome - 800000) * 0.35);
    }

    tax -= personalRelief;
    return tax > 0 ? tax : 0;
}

function calculateHousingLevy(grossSalary) {
    return grossSalary * 0.015;
}

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let nssf = calculateNSSF(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let taxableIncome = grossSalary - nssf - nhif;
    let paye = calculatePAYE(taxableIncome);
    let housingLevy = calculateHousingLevy(grossSalary);

    let totalDeductions = nssf + nhif + paye + housingLevy;
    let netSalary = grossSalary - totalDeductions;

    return {
        "Gross Salary": grossSalary,
        "NSSF Deduction": nssf,
        "NHIF Deduction": nhif,
        "PAYE Tax": paye,
        "Housing Levy": housingLevy,
        "Total Deductions": totalDeductions,
        "Net Salary": netSalary
    };
}


const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));

const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("\nSalary Breakdown:");
for (let [key, value] of Object.entries(salaryDetails)) {
    console.log(`${key}: Ksh ${value.toFixed(2)}`);
}
