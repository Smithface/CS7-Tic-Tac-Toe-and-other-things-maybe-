const makeInvisible = () => {
  document.getElementById("disappearingButton").style.visibility = "hidden"; // called by goodbye button from 'onclick' on HTML, makes button with id 'disappearingButton' invisible
};

const makeVisible = () => {
  document.getElementById("disappearingButton").style.visibility = "visible";// called by hello button from 'onclick' on HTML, makes button with id 'disappearingButton' visible
}