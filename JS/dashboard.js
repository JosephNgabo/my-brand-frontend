let isOn=false;
const showMenu=()=>{
    const div=document.querySelectorAll(".mobile-menu");
isOn?div[0].style.display="none": div[0].style.display="flex";
isOn=!isOn;
}
document.getElementById("showMenu").addEventListener('click', showMenu);

let isUserProfileOn=false;
const showUserProfile=()=>{
    const div=document.querySelectorAll(".user-profile");
    isUserProfileOn?div[0].style.display="none": div[0].style.display="block";
isUserProfileOn=!isUserProfileOn;
}
document.getElementById("userDiv").addEventListener('click', showUserProfile);





function logOut(){
    localStorage.removeItem("tempLog");
    location.href="./index.html";

}





// let coverImage
// document.getElementById('fileInput').addEventListener('change', (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//         coverImage = reader.result;
//     };
    
// });






//        document.addEventListener("DOMContentLoaded", () => {
//        const recentItemDataUrl = localStorage.getItem("recent-Item");
//        if(recentItemDataUrl) {
//        document.querySelector("#imgPreview").setAttribute("src", recentItemDataUrl);

//     }
// })