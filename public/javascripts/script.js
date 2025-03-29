//target html elements from index using the id
const generateTextButton = document.getElementById("generateTextButton");
const generatedText = document.getElementById("generatedText");
const textEntered = document.getElementById("textEntered");

// Function to show loading text
const showLoading = () => {
  generatedText.innerHTML = "loading...."; //
};

//event listener for button click
generateTextButton.addEventListener("click", async () => {
  const questionTextEntered = textEntered.value.trim(); //get value from input field

  // validations
  if (!questionTextEntered) {
    generatedText.innerHTML = "Enter Text here";
    return;
  }

  if (questionTextEntered.length < 5) {
    generatedText.innerHTML = "Text must be at least 5 characters long.";
    return;
  }

  //1. create try catch
  try {
    //2. call show loading state function
    //3. create a response request
    //4. validate response
  } catch (error) {
    //5. catch error
  }
});
