function scuberGreetingForFeet(feet){
 if (feet <= 400){
  return "This one is on me!";
 }
 else if (feet >= 400 && feet <= 2000){
  return "That will be twenty bucks."
 }
 else if (feet > 2000 && feet <= 2500){
  return 'I will gladly take your thirty bucks.'
 }
 else if (feet > 2500){
  return "No can do."
 } 
}

function ternaryCheckCity(city){
  let answer;
  city === 'NYC' ? ( answer = "Ok, sounds good.") : (answer =  'No go.');
  return answer;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  
  }
  return response;
}