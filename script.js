const projects = [
    { title: "个人简历", desc: "老板请捞我去上班吧，求求了", link: "XiangMu/00JianLi/index.html", img: "SuolveTu/00JianLi.png" },
    { title: "React 组件库", desc: "自定义 UI 组件集合", link: "project2.html", img: "thumb2.png" },
    { title: "Canvas 绘图工具", desc: "使用 JavaScript 操作 HTML5 Canvas", link: "project3.html", img: "thumb3.png" }
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
