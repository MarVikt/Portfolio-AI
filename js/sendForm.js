const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.dir(form);
    const formData = new FormData(form);
    const bodyForm = {};

    formData.append("form", form.classList.value);
    formData.forEach((value, field) => {
      bodyForm[field] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(bodyForm),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        alert("Данные успешно отправлены");
      })
      .catch((error) => {
        alert("данные отправлены с ошибкой " + error.message);
      })
      .finally(() => {
        form.reset();
      });
  });
});
