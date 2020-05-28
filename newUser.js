const waitNewUserSecond = 3;

if (!localStorage.getItem("newUser")) {
    $crisp.push(["on", "chat:initiated", function () { localStorage.setItem("newUser", true) }])
    $crisp.push(["on", "session:loaded", function () {
        setTimeout(function () {
            if (!localStorage.getItem("newUser")) {
                $crisp.push(["do", "chat:open"])
                localStorage.setItem("newUser", true)
            }
        }, waitNewUserSecond * 1000)
    }])
}
