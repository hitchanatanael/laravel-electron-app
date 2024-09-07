const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");
const os = require("os");
const cachePath = path.join(os.tmpdir(), "electron-cache");

app.setPath("userData", cachePath);

// Fungsi untuk membuat jendela aplikasi
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile("electron/index.html");
};

// Event ketika aplikasi siap
app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// Fungsi untuk menjalankan npm run dev dan php artisan serve
function startApp() {
    exec("npm run dev", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });

    exec("php artisan serve", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

// Listener untuk menjalankan perintah dari frontend
ipcMain.on("start-app", (event) => {
    startApp();
    const win = BrowserWindow.getFocusedWindow();
    win.loadFile("electron/dashboard.html");
});
