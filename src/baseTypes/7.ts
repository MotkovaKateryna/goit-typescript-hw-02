/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/


enum Days {
  monday = "monday",
  tuesday = "tuesday" ,
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday" ,
  saturday = "saturday " ,
  sunday = "sunday",
}

function isWeekend(day:Days):boolean {
return day === Days.saturday || day === Days.sunday;
}


console.log("isWeekend: ", isWeekend(Days.thursday)); // false
console.log("Today is: ", Days.thursday); // 'thursday'









// type Day = {
//   [Days.monday]:{ message: () => string;};
//   [Days.tuesday]:{ message: () => string;};
//   [Days.wednesday]:{ message: () => string;};
//   [Days.thursday]:{ message: () => string;};
//   [Days.friday]:{ message: () => string;};
//   [Days.saturday]:{ message: () => string;};
//   [Days.sunday]:{ message: () => string;};
// };
