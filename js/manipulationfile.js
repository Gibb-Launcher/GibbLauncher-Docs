function convertMd(teste) {
    var md = new Remarkable();
    return md.render(teste);
}


function readFile(file) {
    var f = new XMLHttpRequest();
    f.open("GET", file, false);
    f.onreadystatechange = function () {
        if (f.readyState === 4) {
            if (f.status === 200 || f.status == 0) {
                var res = f.responseText;
                md = convertMd(res);
                document.getElementById("document").innerHTML = md;
            }
        }
    }
    f.send(null);
}