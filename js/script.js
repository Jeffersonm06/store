const navs = document.querySelectorAll('.navbar')

navs.forEach((nav) =>{
    nav.innerHTML = `
        <a href="index.html">apps</a>
        <a href="abaut.html">sobre</a>
        `
})