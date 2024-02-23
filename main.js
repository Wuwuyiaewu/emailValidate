import './style.css'
import { checkerMail,validateEmailAddress } from './MailChecker';
document.addEventListener('DOMContentLoaded', () => {
  console.log(checkerMail('000email.com'));
  document.getElementById('sendEmailButton').addEventListener('click', validateEmailAddress);
});