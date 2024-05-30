import { useState } from 'react';

import PayrollInput from './PayrollInput';

const PayrollCalculatorForm = ({ children }) => {
  const [yearlyPay, setYearlyPay] = useState(0);
  const [monthlyPay, setMonthlyPay] = useState(0);
  const [weeklyPay, setWeeklyPay] = useState(0);
  const [dailyPay, setDailyPay] = useState(0);
  const [hourlyPay, setHourlyPay] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(40);

  const updatePayroll = (type, value) => {
    const numValue = parseFloat(value);

    if (isNaN(numValue) || numValue < 0) {
      console.error('Invalid input value');
      return;
    }

    let hourlyPay = 0;
    const hoursWorked = type === 'hoursWorked' ? numValue : 40;

    // Calculate hourly pay based on the type of input that was changed
    switch (type) {
      case 'yearly':
        hourlyPay = numValue / 260 / (hoursWorked / 5);
        // hourlyPay = numValue / (260 * (hoursWorked / 5)); // 260 working days in a year
        break;
      case 'monthly':
        hourlyPay = numValue / 4 / hoursWorked;
        //setHourlyPay(numValue / 21.7 / (hoursWorked / 5));
        //hourlyPay = numValue / (21.5 * (hoursWorked / 5));
        break;
      case 'weekly':
        hourlyPay = numValue / hoursWorked;
        //setHourlyPay(numValue / hoursWorked);
        //hourlyPay = numValue / hoursWorked;
        break;
      case 'daily':
        hourlyPay = numValue / (hoursWorked / 5);
        //setHourlyPay(numValue / (hoursWorked / 5));
        //hourlyPay = numValue / (hoursWorked / 5);
        break;
      case 'hourly':
        hourlyPay = numValue;
        //setHourlyPay(numValue);
        //hourlyPay = numValue;
        break;
      default:
        console.error('Unknown pay type');
        return;
    }

    // Update all pays based on the new hourly pay
    let dailyPay = hourlyPay * (hoursWorked / 5);

    setHoursWorked(hoursWorked);
    setHourlyPay(hourlyPay);
    setDailyPay(dailyPay);
    setWeeklyPay(hourlyPay * hoursWorked);
    setMonthlyPay(dailyPay * 21.7);
    setYearlyPay(dailyPay * 260); // 260 working days in a year
  };

  return (
    <form class="max-w-sm mx-auto">
      <PayrollInput
        label="Yearly Pay"
        id="yearlyPay"
        initialValue={yearlyPay}
        onChange={(newValue) => updatePayroll('yearly', newValue)}
      />
      <PayrollInput
        label="Monthly Pay"
        id="monthlyPay"
        initialValue={monthlyPay}
        onChange={(newValue) => updatePayroll('monthly', newValue)}
      />
      <PayrollInput
        label="Weekly Pay"
        id="weeklyPay"
        initialValue={weeklyPay}
        onChange={(newValue) => updatePayroll('weekly', newValue)}
      />
      <PayrollInput
        label="Daily Pay"
        id="dailyPay"
        initialValue={dailyPay}
        onChange={(newValue) => updatePayroll('daily', newValue)}
      />
      <PayrollInput
        label="Hourly Pay"
        id="hourlyPay"
        initialValue={hourlyPay}
        onChange={(newValue) => updatePayroll('hourly', newValue)}
      />
      <PayrollInput
        label="Hours Worked"
        id="hoursWorked"
        initialValue={hoursWorked}
        onChange={(newValue) => updatePayroll('hoursWorked', newValue)}
      />
    </form>
  );
};

export default PayrollCalculatorForm;
