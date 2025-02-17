const apps = [
    {
        name: "FileSystem",
        url: "app-debug.apk",
        git: 'https://github.com/Jeffersonm06/registrador',
        description: `Aplicativo pra criação de registros com imagem (ou video) e texto`
    },
];

function download(url, name) {
    const apkUrl = `/apps/${name}/${url}`;
    console.log(name)
    const link = document.createElement("a");
    link.href = apkUrl;
    link.download = name + '.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function creatCards() {
    const cardsContainer = document.getElementById("cards");
    apps.forEach((app, index) => {
        cardsContainer.innerHTML += `
        <div class="card">
            <div class="card-border-top"></div>
            <div class="img">
                <img src="apps/${app.name}/logo.jpeg" alt="">
            </div>
            <span>app</span>
            <p class="job">${app.name}</p>
            <button onclick="addView(${index})"> Ver </button>
        </div>
    `;
    });
}

function addView(index) {
    const app = apps[index];
    const view = document.getElementById('view');
    const bodyWidth = document.body.offsetWidth;

    // Exibe a view de acordo com o tamanho da tela
    if (bodyWidth < 640) {
        view.style.left = "0px"; // Exibe a view quando a tela for menor que 640px
    }

    // Atualiza o conteúdo da view
    view.innerHTML = `
        <div class="container">
            <i class="bi bi-arrow-left-circle-fill" id="backbutton"></i>
            <div class="logo">
                <img src="apps/${app.name}/logo.jpeg" alt="">
            </div>
            <div class="description">
                <p>
                    <strong>${app.name}</strong><br>
                    ${app.description}
                </p>
                <br>
                <a href="${app.git}" target="_blank">Repositório git</a>   
            </div>
            <div class="download">
                <button onclick="download('${app.url}', '${app.name}')">
                    baixar
                    <i class="bi bi-download"></i>
                </button>
            </div>
            <div class="images">
                <img src="apps/${app.name}/images/1.jpeg" alt="">
                <img src="apps/${app.name}/images/2.jpeg" alt="">
            </div>
        </div>
    `;

    // Adiciona o evento para o botão "voltar"
    const backbutton = document.getElementById('backbutton');
    backbutton.addEventListener('click', () => {
        view.style.left = "-100vw"; // Fecha a view quando o botão "voltar" for clicado
    });
}

document.addEventListener('DOMContentLoaded', () => {
    creatCards(); // Cria os cards quando o DOM estiver carregado

    // Exibe a primeira app na view
    addView(0);
});
