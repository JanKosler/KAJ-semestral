
import { useState } from 'react';

export default function PayrollCalculatorForm({children}) {

    const [yearlyPay, setYearlyPay] = useState(0);
    const [monthlyPay, setMonthlyPay] = useState(0);
    const [weeklyPay, setWeeklyPay] = useState(0);
    const [dailyPay, setDailyPay] = useState(0);
    const [hourlyPay, setHourlyPay] = useState(0);
    const [hoursWorked, setHoursWorked] = useState(0);


    const handleSubmit = (e) => {
        if(e != undefined) {
            e.preventDefault();
            console.log('submit called');
            const calculatedWeeklyPay = hoursWorked * hourlyPay;
            setHourlyPay(calculatedWeeklyPay / hoursWorked);
            setDailyPay(calculatedWeeklyPay / 5);
            setWeeklyPay(calculatedWeeklyPay);
            setMonthlyPay(calculatedWeeklyPay * 4);
            setYearlyPay(calculatedWeeklyPay * 52);
        }
        
      };
      

    return (
        <form onSubmit={handleSubmit} class="max-w-sm mx-auto" >
            <div class="mb-5">
                <label for="yearlyPay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Yearly Pay
                    </label>
                    <input 
                        type="number" 
                        id="yearlyPay" 
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
                        value={yearlyPay}
                        onChange={(e) => {
                            handleSubmit();
                            setYearlyPay(e.target.value)}}
                    />           
            </div>
            <div class="mb-5">
<label for="monthlyPay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Monthly Pay
    </label>
    <input 
        type="number" 
        id="monthlyPay" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        value={monthlyPay}
        onChange={(e) => {
            handleSubmit();
            setMonthlyPay(e.target.value)}}
    />           
</div>
<div class="mb-5">
<label for="weeklyPay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Weakly Pay
    </label>
    <input 
        type="number" 
        id="weeklyPay" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        value={weeklyPay}
        onChange={(e) => {
            handleSubmit();
            setWeeklyPay(e.target.value)}
        }
    />           
</div>
<div class="mb-5">
<label for="dailyPay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Daily Pay
    </label>
    <input 
        type="number" 
        id="dailyPay" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        value={dailyPay}
        onChange={(e) => {
            handleSubmit();
            setDailyPay(e.target.value)}}
    />           
</div>
<div class="mb-5">
<label for="hourlyPay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Hourly Pay
    </label>
    <input 
        type="number" 
        id="hourlyPay" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        value={hourlyPay}
        onChange={(e) => {
            handleSubmit();
            setHourlyPay(e.target.value)}}
    />           
</div>

<div class="mb-5">
<label for="hoursWorked" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Hours Worked
    </label>
    <input 
        type="number" 
        id="hoursWorked" 
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
        value={hoursWorked}
        onChange={(e) => {
            handleSubmit();
            setHoursWorked(e.target.value)
        }}
    />           
</div>
        </form>
    );
}
