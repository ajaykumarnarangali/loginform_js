let username=window.localStorage.getItem("username");
user.textContent=`Welcome ${username}`;

function logout()
{
    window.localStorage.removeItem("username");
    window.location="index.html"
}