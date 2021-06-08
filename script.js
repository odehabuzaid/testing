const questions = ['i am from jordan !',
  'i like cofee more than tea !',
  'i am an organized person',
  'do i like reading!',
  'do i like basket ball !'
];

let correctanswer = [1,1,1,0,0];
let responses = ['yes','no','y','n'];

let answer ;
for (const i of questions) {
  do
  {
    answer = prompt(i.toLowerCase());
  }while ( responses.indexOf(answer) === -1);
  if ((correctanswer[questions.indexOf(i)] ) && (answer ==='y' || answer === 'yes')){
    alert('thats right');
    /*console.log(`visitor ${visitorName} Answerd if i like basketball or not correctly `); */
  }
}