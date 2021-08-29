function saveEvent(id) {
  let eventMessage = $(`textarea[hourid="${id}"]`).val();
  window.localStorage.setItem(`event_${id}`, eventMessage);
}

var todaysDate = moment().format("MM DD YYYY");
console.log(todaysDate);
$("#currentDay").text(todaysDate);

let currentHour = moment().hour();

for (i = 8; i < 18; i++) {
  let hour = i % 12 == 0 ? 12 : i % 12;
  let currentClass = "present";
  let eventMessage = window.localStorage.getItem(`event_${i}`);
  eventMessage = eventMessage == null ? "" : eventMessage;

  if (currentHour > i) {
    currentClass = "future";
  } else if (currentHour < i) {
    currentClass = "past";
  }
  $(`<div class="row">
    <div class="hour ">${hour}</div> 
    <textarea hourid="${i}" class="${currentClass}">${eventMessage}</textarea>
    <button type="button" onclick="saveEvent(${i})" class= "saveBtn">save</button>
    </div>`).appendTo(`.container`);
}
