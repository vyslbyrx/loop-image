(function() {
})();
function loopImage(selector,speed) {
    const x = document.querySelectorAll(selector).length;
    let t = 0;
    document.querySelectorAll(selector)[0].classList.add("block")
    setInterval(function () {
        for (let i = 0; i < x; i++) {
            document.querySelectorAll(selector)[i].classList.remove("block");
        }
        document.querySelectorAll(selector)[t].classList.add("block");
        t ++;
        if (t === x) {
            t = 0;
        }
    },speed)
}
