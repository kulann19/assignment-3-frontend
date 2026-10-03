(function () {
  "use strict";

  var form = document.getElementById("bookingForm");
  if (!form) return;

  var dateInput = document.getElementById("date");
  dateInput.min = new Date().toISOString().split("T")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    form.reset();
    form.classList.remove("was-validated");
    document.getElementById("formSuccess").classList.remove("d-none");
  });
})();
