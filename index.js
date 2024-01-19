let username=window.localStorage.getItem("username");
user.textContent=`Welcome ${username}`;

function logout()
{
    window.localStorage.clear();
    window.location="index.html"
}