document.addEventListener('DOMContentLoaded', () => {
    const files = [
        { name: "Tron Script", url: "https://mirror.meamod.com/tron/Tron%20v12.0.7%20(2024-05-28).exe" },
        { name: "Antivirus Removal Tool", url: "https://antivirus-removal-tool.com/files/Antivirus_Removal_Tool_2024_08.zip" },
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
