const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirm-pwd");
const pwdMismatch = document.querySelector(".pwd-mismatch");
const inputPassword = document.querySelectorAll("input[type=password]");
const submit = document.querySelector('button[type=submit]');
let pwdLength = false;
let isMatched = false;
inputPassword.forEach((password) =>
  password.addEventListener("click", () => {
          pwdLength = true;
  })
);
inputPassword.forEach((password) =>
  password.addEventListener("focusout", () => {
    if (pwdLength) {
      pwdLength = false;
            if (pwd.value !== "" && confirmPwd.value !== "") {
                    if (pwd.value === confirmPwd.value) {
                            isMatched = true;
                            pwdMismatch.textContent = "";
                            confirmPwd.classList.add("matched");
                            pwd.classList.add("matched");
                            confirmPwd.classList.remove("not-matched");
                            pwd.classList.remove("not-matched");
                            submit.disabled = false;
                    }
                    else {
                            isMatched = false;
                            pwdMismatch.textContent = "* Passwords do not match";
                            pwdMismatch.style.color = "red";
                            confirmPwd.classList.add("not-matched");
                            pwd.classList.add("not-matched");
                            confirmPwd.classList.remove("matched");
                            pwd.classList.remove("matched");
                            submit.disabled = true;

                    }
            }
    }
  })
);
