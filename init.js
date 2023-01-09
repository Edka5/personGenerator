document.getElementById("btnСlear").addEventListener("click", function () {
    (document.getElementById("firstNameOutput").innerText = ""),
      (document.getElementById("surNameOutput").innerText = ""),
      (document.getElementById("middleNameOutput").innerText = ""),
      (document.getElementById("genderOutput").innerText = ""),
      (document.getElementById("birthYearOutput").innerText = ""),
      (document.getElementById("professionOutput").innerText = "")
  }),
    document.getElementById("btnGenerate").addEventListener("click", function () {
      var e = personGenerator.getPerson();
      (document.getElementById("firstNameOutput").innerText = e.firstName),
        (document.getElementById("surNameOutput").innerText = e.lastName),
        (document.getElementById("middleNameOutput").innerText = e.middleName),
        (document.getElementById("genderOutput").innerText = e.gender),
        (document.getElementById("birthYearOutput").innerText = e.year),
        (document.getElementById("professionOutput").innerText = e.profession)
    })