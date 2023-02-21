
const submits = () => {
    const user = JSON.parse(localStorage.getItem("tempLog"))

    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    var image = document.getElementById('photo');

    if (!title || !image || !body) {
        return false;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);

    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("body", body);
    formdata.append("photo", image.files[0]);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://my-brand-production-1062.up.railway.app/api/blog/add/", requestOptions)
        .then(response => response.json())
        .then(result => {

            console.log(result)
            document.getElementById('title').value = '',
                document.getElementById('body').value = '',
                document.getElementById('photo').value = ''
        })
        .catch(error => console.log('error', error));




    return false


}
removeData = () => {
    localStorage.splash('articles');
};

