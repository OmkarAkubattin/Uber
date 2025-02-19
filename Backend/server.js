const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"; // Allows external access

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
    console.log(`🚀 Server is running on http://${HOST}:${PORT}`);
});

// Handle server errors
server.on("error", (err) => {
    console.error("❌ Server Error:", err.message);
    process.exit(1); // Exit process on failure
});
