import MailChecker from 'mailchecker/platform/node';
export function checkerMail(email){
return MailChecker.isValid(email);
}