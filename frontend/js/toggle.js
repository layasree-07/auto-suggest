var users =[
    {
        "name":"john Doe",
        "gender" : "male",
        "image" : "/images/john.png"
    },
    {
        "name":"tina",
        "gender":"female",
        "image":"/images/tina.png"

    }
]
var curId=0;
function toggle(){
    curId = (curId + 1)%2
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
}
