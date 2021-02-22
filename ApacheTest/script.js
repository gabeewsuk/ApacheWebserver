let number = document.getElementById("num").value;

let output = document.getElementById("output");

function increment(event) {
  event.preventDefault();
  number.value++;
  output.innerHTML = "<p>Value:" + number.value + " ";
}

/**
 * GET- Get stuff from apis
 * POST - POST stuff to apis
 */

function fetcher() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
