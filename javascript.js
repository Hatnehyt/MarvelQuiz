document.addEventListener('DOMContentLoaded', function() { //checks if the page is fully loaded first
    const submitButton = document.getElementById('submitButton'); //listens out for the event of hitting the submnit button
  
    submitButton.addEventListener('click', function(event) { //stops the page from refreshing when submit is clicked
      event.preventDefault();
  
      const codeAnswer = document.getElementById("codeAnswer").value; //takes the input from the button and assings it to a varibale
      console.log(codeAnswer); //test in the console to see if it works
  
      const CorrectAnswer1 = "red"; //sets the correct answer
  
      if (codeAnswer === CorrectAnswer1) { //applies the logic and prints out bellow if it is correct or not
        document.getElementById("feedback").textContent = "Correct!";
      } else {
        document.getElementById("feedback").textContent = "Incorrect!";
      }
    });
  });
  