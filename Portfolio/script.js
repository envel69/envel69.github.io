let darkMode = false;

function changeDarkMode(){
    if(darkMode){
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "#efe7e5");
        document.documentElement.style.setProperty("--background-colors", "#043449");
        document.getElementById("light").innerHTML = "Dark mode";

    }else{
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "#043449");
        document.documentElement.style.setProperty("--background-colors", "#efe7e5");
        document.getElementById("light").innerHTML = "Light mode ";
    }
}