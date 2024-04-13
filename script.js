document.querySelector("#menu-icon").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("#menu-icon");
    if(document.querySelector(".navbar").classList.contains("#menu-icon")){
        document.querySelector(".navbar").style.display = "inline";
    } else {
        document.querySelector(".navbar").style.display = "none";
    }
});