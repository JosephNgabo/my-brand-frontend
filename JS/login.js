
axios.post('https://my-brand-production-1062.up.railway.app/api/docs/#/Users/post_api_users_login', {
  username: 'johndoe',
  password: 'password123'
})
  .then(response => {
    console.log(response.data);
    validate = response.data
    function validate() {
        // let users = JSON.parse(localStorage.getItem("users") || "[]")
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value;
        console.log(user, pass)
        if (user == "admin" && pass =="pass") {
            window.location.href= "dashboard.html"
            const Admin={
                id: 000000,
                user: "Admin",
                pass:   "Pass"
            }
            console.log(Admin);
            // window.localStorage.setItem("tempLog", JSON.stringify(Admin))
        }   else{
                if(user === "" || pass ===""){
                    // popContact("please fill all fields");
                    console.log("please fill out fields")
                }
                else{
                    for (let i=0; i<users.length; i++){
                    if(users[i].fname == user && users[i].pwd == pass){
                        // window.localStorage.setItem("tempLog", JSON.stringify(users[i]))
                        let link = "./index.html"
                        window.location.href = link
                        console.log(users[i]);
                        break;
                    }
                    }
                    }
                }
            }
  })
  .catch(error => {
    console.log(error);
    // handle error
  });

    


        
    


