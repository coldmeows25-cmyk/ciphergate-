window.onload = function() {
  const input = document.getElementById("answer");

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      let value = input.value.toLowerCase();

      if (value === "ciphers") {
          <div style="color:lime; background:black; height:100vh; display:flex; justify-content:center; align-items:center; font-family:monospace; text-align:center;">
            <div>
              <h1>WELCOME TO CIPHERGATE</h1>
              <p>> ACCESS GRANTED</p>
            </div>
          </div>
        `;
      } else {
        document.getElementById("message").innerText = "> ACCESS DENIED";
      }
    }
  });
};
