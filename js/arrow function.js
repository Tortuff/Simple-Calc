'use strict';


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);


// Переписанное в стрелочную функцию
const newAsk = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
  
newAsk(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);

