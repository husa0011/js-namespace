var HUSA0011 = {

    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "HUSA0011";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", klick);
        div.addEventListener("mouseover", mouseListen);
        div.addEventListener("mouseout", mouseListen);

        function klick(ev) {
            this.style.backgroundColor = "violet";
            this.style.borderColor = "yellow";
        }

        function mouseListen(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }
    }
}