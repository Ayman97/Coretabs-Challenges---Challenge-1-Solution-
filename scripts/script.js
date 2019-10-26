// validations messages
let validationsMsg = {
  name: "Please enter a vaild name",
  email: "Please enter a vaild Email",
  password: "Password must have at least 6 characters"
};

// vaildate function
function vaildate(input) {
  let inputName = input.getAttribute("id");
  const inputParent = input.parentElement;
  let isVaild = input.checkValidity();
  if(!isVaild){
    inputParent.classList.add("field--error");
    inputParent.setAttribute('data-msg',validationsMsg[inputName]);
  }else{
    inputParent.classList.remove("field--error");
    inputParent.removeAttribute('data-msg');
  }
}

// form onsubmit vaildation
document.forms[0].addEventListener("submit", e => {
  e.preventDefault();
  let formInputs = e.target.getElementsByTagName("input");
  for (let input of formInputs) {
    vaildate(input);
  }
});

// form instant vaildation
document.forms[0].addEventListener("input", e => {
  if (e.target !== e.currentTarget) {
    vaildate(e.target);
  }
  e.stopPropagation();
});