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

let selectedCountry = document.querySelector("#cities");
selectedCountry.addEventListener("change", showTime);
