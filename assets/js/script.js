var todaysDate = moment().format("MM DD YYYY");
console.log(todaysDate);
$("#currentDay").text(todaysDate);

let currentHour = moment().hour();

for (i = 8; i < 18; i++) {
  let hour = i % 12 == 0 ? 12 : i % 12;
  let currentClass = "present";

  if (currentHour > i) {
    currentClass = "future";
  } else if (currentHour < i) {
    currentClass = "past";
  }
  $(`<div class="row ${currentClass}">
    ${hour}
    </div>`).appendTo(`.container`);
}
