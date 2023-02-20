    function signupForm (e){
      event.preventDefault();
      var fname = document.getElementById('fname').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('pwd').value;

      var formData = {
          fname: fname,
          email: email,
          pwd : password,
      };
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert('well done');
  }