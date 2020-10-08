/**
 * You are given the following information, but you may prefer to do some research for yourself.
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

function isLeapYear(year) {
  const isCentury = year % 100 === 0;
  const divisibleBy4 = year % 4 === 0;
  if ((divisibleBy4 && !isCentury) || (divisibleBy4 && year % 400 === 0)) {
    return true;
  }
  return false;
}

let DAYS_IN_MONTHS_BY_MONTHS = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

function daysInMonth(month, isLeapYear = false) {
  let d = DAYS_IN_MONTHS_BY_MONTHS[month];
  return isLeapYear + d;
}

function nextMonth({ year, month, day }) {
  if (month < 12) {
    return { day, month: month + 1, year };
  }
  return { day, month: 1, year: year + 1 };
}

function daysBetweenDates(startDate, endDate) {
  let yearsDiff = endDate.year - startDate.year;
  let daysDiff = 0;
  if (yearsDiff > 1) {
    daysDiff += 365 * (yearsDiff - 1);
    let leapYearsCount = 0;
    for (let i = startDate.year + 1; i < endDate.year; i++) {
      leapYearsCount += isLeapYear(i);
    }
    daysDiff += leapYearsCount;
  }
  const isSameYear = startDate.year === endDate.year;
  let sm = startDate.month;
  let em = isSameYear ? endDate.month : endDate.month + 12;
  for (let i = sm; i < em; i++) {
    daysDiff += DAYS_IN_MONTHS_BY_MONTHS[i > 12 ? i % 12 : i];
  }
  if (sm < 3 && isLeapYear(startDate.year)) {
    daysDiff += 1;
  }
  if (endDate.month >= 3 && isLeapYear(endDate.year)) {
    daysDiff += 1;
  }
  return daysDiff;
}
let epochDay = 1;
let epochMonth = 1;
let epochYear = 1900;

function dayOfWeek({ year, month, day }) {
  let daysDiff = daysBetweenDates(
    { year: epochYear, day: epochDay, month: epochMonth },
    { year, month, day }
  );
  return ((daysDiff % 7) + 1) % 7;
}

(function() {
  let endDate = { day: 1, month: 1, year: 2001 };
  let sundaysCount = 0;
  for (let i = { day: 1, month: 1, year: 1901 }; i.year < endDate.year; i = nextMonth(i)) {
    if (dayOfWeek(i) === 0) {
      console.log(i);
      sundaysCount += 1;
    }
  }
  console.log(sundaysCount);
})();
