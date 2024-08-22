document.addEventListener('DOMContentLoaded', () => {
    const files = [
        { name: "xp_activate32.exe", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/xp_activate32.exe" },
        { name: "Windows_Loader_v.2.2.2.rar", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/Windows_Loader_v.2.2.2.rar" },
        { name: "MAS (Microsoft Activation Script)", url: "https://codeload.github.com/massgravel/Microsoft-Activation-Scripts/zip/refs/tags/2.6" },
        { name: "AdskNLM.exe", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/AdskNLM.exe" },
    ];

    const fileList = document.getElementById('file-list');

    files.forEach(file => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = file.url;
        link.textContent = file.name;
        link.download = file.name;

        listItem.appendChild(link);
        fileList.appendChild(listItem);
    });
});
