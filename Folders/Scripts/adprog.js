document.addEventListener('DOMContentLoaded', () => {
    const files = [
        { name: "Windows-ISO-Downloader.exe", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/Windows-ISO-Downloader.exe" },
        { name: "hjsplit.exe", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/hjsplit.exe" },
        { name: "Bulk Rename Utility.zip", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/Bulk%20Rename%20Utility.zip" },
        { name: "RawWriteWin.zip", url: "https://raw.githubusercontent.com/GabrielePepe/Archive/main/Rawritewin.zip" },
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
