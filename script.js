function login() {
    let username = user.value
    let password = pass.value
    if (!username || !password) {
        alert("enter anything")
    }
    else {
        window.location = "dashboard.html"
        window.localStorage.setItem("username",username);
    }
}