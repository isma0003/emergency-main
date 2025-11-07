const form = document.querySelector("#icecream-form");

form.addEventListener("input", (e) => {
  if (e.target.id === "realism") {
    document.querySelector("#realismValue").textContent = e.target.value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  document.querySelector("#out_name").textContent = data.get("fullname") || "—";
  document.querySelector("#out_age").textContent = data.get("age") || "—";
  document.querySelector("#out_heard").textContent = data.get("heard") || "—";
  document.querySelector("#out_feeling").textContent =
    data.get("feeling") || "—";
  document.querySelector("#out_tone").textContent = data.get("tone") || "—";
  document.querySelector("#out_realism").textContent =
    data.get("realism") || "—";
  document.querySelector("#out_consent").textContent = data.get("consent")
    ? "Ja"
    : "Nej";

  alert("Tak for dine svar! De bliver kun vist her på siden.");
  form.reset();
  document.querySelector("#realismValue").textContent = "2";
});
