import MailChecker from "mailchecker/platform/node";
import axios from "axios";
export function checkerMail(email) {
  return MailChecker.isValid(email);
}
// 要先去 https://verifalia.com  辦帳號
export function validateEmailAddress() {
  const username = '你的信箱';
  const password = '你的密碼';
  const emailInput = document.getElementById('emailInput');
  
  const data = {
    entries: [
      {
        inputData: emailInput.value,
      },
    ],
  };
  const config = {
    auth: {
      username: username,
      password: password,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios.post('https://api.verifalia.com/v2.4/email-validations', data, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}
