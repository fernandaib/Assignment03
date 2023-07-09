// Your job in this part of the assignment is to validate those entries.
// Within investment, the number should be numeric. 
// Within rate, the number should be numeric and between 0 and a realistic rate like 6%. 
// For years, the number should be numeric and between 1 and 30.

let investment;
let rate;
let years;

do{
    investment = parseFloat(prompt ("Enter INVESTMENT amount as xxxx.xx"));
}while (isNaN(investment) || investment<0)

do{
    rate = parseFloat(prompt ("Enter RATE amount as xx.x.\nIt must be less or equal than 10"));
}while (isNaN(rate) || rate>10)

do{
    years = parseInt(prompt ("Enter number of YEARS between 1 and 30"));
}while (isNaN(years) || years<1 || years>30)






