document.getElementById("answer").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    let input = this.value.toLowerCase();

    if(input === "ciphers") {
      document.body.innerHTML = `
        <div style="color:lime; background:black; height:100vh; display:flex; justify-content:center; align-items:center; font-family:monospace; text-align:center;">
          <div>
            <h1>WELCOME TO CIPHERGATE</h1>
            <p>> ACCESS GRANTED</p>
            <p>> You are now inside the system</p>
          </div>
        </div>
      `;
    } else {
      document.getElementById("message").innerText = "> ACCESS DENIED";
    }
  }
});
