//validation script
const inputs = document.querySelectorAll("input");

const patterns = {
  username: /^[a-z\d]{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //injamcse@gmail.com
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/
};

//Validation Function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
  //console.log(regex.test(field.value));
}

inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
