window.onload = function() {
    var images = document.getElementsByTagName("img");

    for (var i = 0, max = images.length; i < max; i++) {
        images[i].style.opacity = "1";
    }

    const fotos = document.querySelectorAll(".polaroid-images a div");
    const enlaces = document.querySelectorAll("a");
    console.log(fotos[0]);
    for (foto of fotos) {
        foto.addEventListener("click", (event) => {
            if (!event.target.classList.contains("selected")) {
                maximize(event);
            } else {
                event.preventDefault();
                event.target.classList.remove("selected");
            }
        });
    }

    function maximize(event) {
        event.preventDefault();
        elem = event.target;
        console.log(elem.parentElement.parentElement.parentElement);

        elem.classList.add("selected");
    }
};