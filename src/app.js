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
updateTime();
setInterval(updateTime, 1000);
