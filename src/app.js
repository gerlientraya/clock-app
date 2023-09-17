function showTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "philippines") {
      alert("Magandang Umaga!");
    }
    if (event.target.value === "spain") {
      alert("Buenas Dias!");
    }
    if (event.target.value === "lisbon") {
      alert("Bom Dia!");
    }
  }
}

//show data of copenhagen
function updateTime() {
  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");
  copenhagenDateElement.innerHTML = moment()
    .tz("Europe/Copenhagen")
    .format("MMMM D, YYYY ");
  copenhagenTimeElement.innerHTML = moment()
    .tz("Europe/Copenhagen")
    .format("hh:mm:ss [<small>]A[</small>]");
  //show Data of singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  singaporeDateElement.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("MMMM D, YYYY");
  singaporeTimeElement.innerHTML = moment()
    .tz("Asia/Singapore")
    .format("hh:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityime.format("MMMM D, YYYY")}</div>
  </div>
  <div class="time">${cityime.format("hh:mm:ss [<small>]A[</small>]")}</div>
</div>`;
}
updateTime();
setInterval(updateTime, 1000);

//select funtionality

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
