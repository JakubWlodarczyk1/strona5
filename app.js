function validateForm() {
  let isValid = true;
  const form = document.querySelector('form');
  const date = document.getElementById("date");
  const male = document.getElementById("male");
  const female = document.getElementById("female");

  const fields = [
    { selector: '.row:nth-child(1)', regex: /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]{2,19}$/ },
    { selector: '.row:nth-child(2)', regex: /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]{1,34}(-[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]{1,34})?$/ },
    { selector: '.row:nth-child(3)', regex: /^[A-ZŻŹĆĄŚĘŁÓŃ\d][a-zzżźćńółęąś\d]*(-[A-ZŻŹĆĄŚĘŁÓŃ\d][a-zzżźćńółęąś\d]*)*( [A-ZŻŹĆĄŚĘŁÓŃ\d][a-zzżźćńółęąś\d]*(-[A-ZŻŹĆĄŚĘŁÓŃ\d][a-zzżźćńółęąś\d]*)*)*$/ },
    { selector: '.row:nth-child(4)', regex: /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]*(-[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]*)*( [A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]*(-[A-ZŻŹĆĄŚĘŁÓŃ][a-zzżźćńółęąś]*)*)*$/ },
    { selector: '.row:nth-child(5)', regex: /^\d{1,4}[a-zA-Z]?$/ },
    { selector: '.row:nth-child(6)', regex: /^\d{1,4}[a-zA-Z]?$/ },
    { selector: '.row:nth-child(7)', regex: /^\d{3}-\d{3}-\d{3}$/ },
    { selector: '.row:nth-child(8)', regex: /^\d{11}$/ },
    { selector: '.row:nth-child(9)', regex: /^\d{2}-\d{3}$/ }
  ];

  fields.forEach(field => {
    const input = form.querySelector(field.selector + ' input');
    const error = form.querySelector(field.selector + ' p');

    if (field.selector.includes("6") && input.value.trim() === "") {
      error.style.visibility = 'hidden';
      return;
    }

    if (field.selector.includes("4") && (input.value.length < 2 || input.value.length >30)) {
      input.style.border = '1px solid red';
      error.style.visibility = 'visible';
      isValid = false;
      return;
    }

    if (field.selector.includes("3") && (input.value.length < 3 || input.value.length >30)) {
      input.style.border = '1px solid red';
      error.style.visibility = 'visible';
      isValid = false;
      return;
    }

    if (!field.regex.test(input.value)) {
      input.style.border = '1px solid red';
      error.style.visibility = 'visible';
      isValid = false;
    } else {
      input.style.border = '';
      error.style.visibility = 'hidden';
    }
  });

  const error1 = form.querySelector('.row:nth-child(10) p');
  if (date.value === "") {
    date.style.border = '1px solid red';
    error1.style.visibility = 'visible';
    isValid = false;
  } else {
    date.style.border = '';
    error1.style.visibility = 'hidden';
  }

  const error2 = form.querySelector('.row:nth-child(12) p');
  if (!male.checked && !female.checked) {
    male.style.outline  = '1px solid red';
    female.style.outline  = '1px solid red';
    error2.style.visibility = 'visible';
    isValid = false;
  } else {
    male.style.outline  = '';
    female.style.outline  = '';
    error2.style.visibility = 'hidden';
  }
  
  if (isValid) {
    alert("Formularz został poprawnie wypełniony")
  }

  return isValid;
}

document.addEventListener("DOMContentLoaded", function() {
  const date = document.getElementById("date");
  const today = new Date();
  const dateString = today.toISOString().substring(0, 10);
  date.setAttribute("max", dateString);
});
