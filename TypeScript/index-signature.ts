const juniorDev = {
    baseSalary: 80_000,
  };
   
const seniorDev = {
    baseSalary: 155_000,
    bonusYearly: 20_000,
  };

//   index signature in TS
function totalSalary(salaryObject: { [key: string]: number }) {
    let total = 0;
    for (const name in salaryObject) {
      total += salaryObject[name];
    }
    return total;
  }
   
  console.log(totalSalary(juniorDev)); // => 80_000
  console.log(totalSalary(seniorDev)); // => 175_000