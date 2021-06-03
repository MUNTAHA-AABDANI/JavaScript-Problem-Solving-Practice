
let percentage=prompt("Enter your percentage" );
console.log(percentage);
var percent = parseInt(percentage);

switch (percent)
{
    case ((percent > 85)):
        alert("connect");
    document.write('Your grade is A1');
    console.log('Your grade is A1')
         break;
    case ((percent<=85) && (percent > 80)):
    
        alert('Your grade is A1');
         break;
    case ((percent<=80) && (percent > 70)):
    
        alert('Your grade is B');
         break;
    case ((percent<=70) && (percent > 60)):
    
        alert('Your grade is C');
         break;
    case ((percent<=60) && (percent >40)):
    
        alert('Your grade is D');
         break;
    case ((percent<=40) && (percent <= 35)):
    
        alert('Candidate failed');
         break;

         default:
             alert('Invalid ! please enter your grade        ')
    // case (percentage>=85):
    
    //     alert('Your grade is A');
    //      break;
    // case (percentage>=85):
    
    //     alert('Your grade is A');
    //      break;
    // case (percentage>=85):
    
    //     alert('Your grade is A');
    //      break;
}