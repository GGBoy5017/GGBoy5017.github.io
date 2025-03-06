const projects = [
    { title: "00个人简历", desc: "老板请捞我去上班吧，求求了", link: "XiangMu/00JianLi/index.html", img: "SuoLveTu/00JianLi.jpg" },
    { title: "01线条小狗", desc: "按钮会变大，不得不同意", link: "XiangMu/01XianTiaoXiaoGou/index.html", img: "SuoLveTu/01XianTiaoXiaoGou.gif" },
    { title: "02恋爱告急", desc: "谁说呆呆的就不能表白了，我就呆给你看", link: "XiangMu/02LianAiGaoJi/index.html", img: "SuoLveTu/02LianAiGaoJi.png" }
];

const container = document.querySelector(".container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <a href="${project.link}">
            <img src="${project.img}" alt="${project.title}">
            <div class="info">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
        </a>
    `;
    container.appendChild(card);
});
