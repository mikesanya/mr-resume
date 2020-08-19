let checkmark = document.getElementsByClassName('complete');

function alphanumeric(data) { 
  let letters = /^[0-9a-zA-Z]+$/;
  if (letters.test(data)) {
    return true;
  }
  return false;
}

function validateyourEmail(data) {  
  let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(testData.test(data)) {
    return true;
  }
  return (false)  
}  

function disableButton() {
  document.getElementById('submit').disabled = true;
}

function enableButton() {
  document.getElementById('submit').disabled = false;
}

document.getElementById('name').onblur = function() {
  let status = document.getElementById('name').value;
  if (status.length < 3) {
    document.getElementById('alert-name').innerHTML = 'Name field is empty or less than 3 characters!';
    checkmark[0].classList.remove('active');
    disableButton();
  } else if (!alphanumeric(status)) {
    document.getElementById('alert-name').innerHTML = 'Invalid characters!';
    checkmark[0].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-name').innerHTML = '';
    checkmark[0].classList.add('active');
    enableButton();
  }
};

document.getElementById('firstname').onblur = function() {
  let status = document.getElementById('firstname').value;
  if (status.length < 5) {
    document.getElementById('alert-firstname').innerHTML = 'firstname field is empty or less than 5 characters';
    checkmark[1].classList.remove('active');
    disableButton();
  } else if (!alphanumeric(status)) {
    document.getElementById('alert-firstname').innerHTML = 'Invalid characters!';
    checkmark[1].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-firstname').innerHTML = '';
    checkmark[1].classList.add('active');
    enableButton();
  }
};

document.getElementById('lastname').onblur = function() {
  let status = document.getElementById('lastname').value;
  if (status.length < 0) {
    document.getElementById('alert-lastname').innerHTML = 'lastname field is empty';
    checkmark[2].classList.remove('active');
    disableButton();
  } else if (!validateEmail(status)) {
    document.getElementById('alert-lastname').innerHTML = 'Invalid  lastname!';
    checkmark[2].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-lastname').innerHTML = '';
    checkmark[2].classList.add('active');
    enableButton();
  }
};

document.getElementById('youremail').onblur = function() {
  let status = document.getElementById('youremail').value;
  if (status.length < 6) {
    document.getElementById('alert-youremail').innerHTML = 'youremail field is empty or less than 6 characters';
    checkmark[3].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-youremail').innerHTML = '';
    checkmark[3].classList.add('active');
    enableButton();
  }
  
  document.getElementById('subject').onblur = function() {
    let confirm = document.getElementById('subject').value;
    if(status != confirm) {
      document.getElementById('alert-subject').innerHTML = "";
      checkmark[4].classList.remove('active');
      disableButton();
    } else {
      document.getElementById('alert-subject').innerHTML = '';
      checkmark[4].classList.add('active');
      enableButton();
    }
  }
}

document.getElementById('writesomething').onblur = function() {
  let status = document.getElementById('writesomething').value;
  if (status < 0 || status > 10) {
    document.getElementById('alert- writesomething').innerHTML = "";
    checkmark[5].classList.remove('active');
    disableButton();
  } else {
    document.getElementById('alert-writesomething').innerHTML = '';
    checkmark[5].classList.add('active');
    enableButton();
  }
}