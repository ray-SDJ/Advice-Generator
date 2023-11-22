function generateAdvice() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.adviceslip.com/advice");
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("advice").innerHTML = response.slip.advice;
      } else {
        console.log("Error generating advice:", xhr.statusText);
      }
    };
    xhr.send();
  }
  