document.getElementById("answer").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let input = this.value.toLowerCase();

    if(input === "ciphers") {
      document.getElementById("message").innerText = "> ACCESS GRANTED";
    } else {
      document.getElementById("message").innerText = "> ACCESS DENIED";
    }
  }
});
