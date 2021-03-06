let input = document.querySelector("input");
$(".loader").addClass("display");
let counter = input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    $(".loader").removeClass("display");

    setTimeout(function () {
      $(".loader").addClass("display");
    }, 500);

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
        0 +
        "<p>" +
        "</div>"
    );

    let goals = document.querySelectorAll(".blocks");

    goals.forEach(function (colors) {
      colors.style.background = colours[randomColour];
    });
    goals.forEach(function (goal) {
      let counter = 0;

      goal.addEventListener("click", function (e) {
        e.target.children[1].innerHTML = counter++;

        if (counter === 8) {
          let title = document.querySelector("h1");
          title.style.color = "green";
          title.innerHTML = "WELL DONE!!";

          setTimeout(function () {
            if (title.style.color == "green") {
              title.style.color = "Black";
              title.innerHTML = "Goal Counter";
            }
          }, 2000);
        }
      });
    });
    // Trigger the button element with a click
  }

  event.preventDefault();
});
$("");

$("button").click(function () {
  location.reload();
});
