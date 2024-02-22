import './style.css'
import { checkerMail } from './counter.js';
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('emailInput');
  console.log(emailInput.value);
  console.log(checkerMail('000email.com'));
});