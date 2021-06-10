let input = document.querySelector("input");

let counter = input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    let colours = ["#4cd137", "#e84118", "#00a8ff", "#fbc531", "#9c88ff"];

    let randomColour = Math.floor(Math.random() * colours.length);
    let userInput = input.value;
    $(".targets").append(
      '<div class="blocks"' +
        ">" +
        "<h5>" +
        userInput +
        "</h5>" +
        "<p>" +
        "1" +
        "<p>" +
        "</div>"
    );

    let goals = document.querySelectorAll(".blocks");

    goals.forEach(function (colors) {
      colors.style.background = colours[randomColour];
    });

    counter = 1;
    goals.forEach(function (goal) {
      goal.addEventListener("click", function (e) {
        counter++;
        e.target.children[1].innerHTML = counter;

        if (counter >= 7) {
          let title = document.querySelector("h1");
          title.style.color = "green";
          title.innerHTML = "WELL DONE!!";

          setTimeout(function () {
            if (title.style.color == "green") {
              title.style.color = "Black";
              title.innerHTML = "Goal Counter";
            }
          }, 5000);
        }
      });
    });
    // Trigger the button element with a click
  }

  event.preventDefault();
});
$("");
