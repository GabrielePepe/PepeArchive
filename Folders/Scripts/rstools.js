document.addEventListener('DOMContentLoaded', () => {
    const files = [
        { name: "clonezilla-live-3.1.2-9-amd64.iso", url: "https://kumisystems.dl.sourceforge.net/project/clonezilla/clonezilla_live_stable/3.1.3-16/clonezilla-live-3.1.3-16-amd64.iso?viasf=1" },
        { name: "BootData.7z", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/BootData.7z" },
        { name: "AOMEIPartitionAssistant-8.7-PE.iso", url: "https://dl.malwarewatch.org/software/advanced/AOMEIPartitionAssistant-8.7-PE.iso" },
        { name: "WindowsLoginUnclocker.zip", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/Login%20Unlocker.zip" },
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
