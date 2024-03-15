import http from "http";
import fs from "fs";
// Import the default export named "safeEval" from the "safe-eval" package below
import safeEval from "safe-eval";

const hostname = "localhost";
const port = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
	const baseURL = "http://" + req.headers.host + "/";
	const reqUrl = new URL(req.url, baseURL);
	const cmd = reqUrl.searchParams.get("cmd");
	let content = "";

	if (cmd) {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		try {
			content = safeEval(cmd);	// Dangerous function
		} catch (e) {
			content = fs.readFileSync("web_page.html", "utf8");
		}
		res.end("" + content);
	} else {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		try {
			content = fs.readFileSync("web_page.html", "utf8");
		} catch (e) {
			console.log("Error:", e.stack);
		}
		res.end(content);
	}
});

server.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

/////////////////////////////////////////////////////////////////////////////
//The exec method: Dangers and Alternatives//////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

import http from "http";
import fs from "fs";
import { execFile } from "child_process"; // Dangerous method

const hostname = "localhost";
const port = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
	const baseURL = "http://" + req.headers.host + "/";
	const reqUrl = new URL(req.url, baseURL);
	const msg = reqUrl.searchParams.get("message");
	let content = "";

	if (msg) {
		res.setHeader("Content-Type", "text/html");
		// Convert exec to execFile
		execFile("echo", ["-e", msg], (error, stdout, stderr) => {
			if (error) {
				res.statusCode = 500;
				res.end("ERROR");
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				res.statusCode = 500;
				res.end("ERROR");
				console.log(`stderr: ${stderr}`);
				return;
			}
			res.statusCode = 200;
			res.end(stdout);
			console.log(`stdout: ${stdout}`);
		});
	} else {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		try {
			content = fs.readFileSync("web_page.html", "utf8");
		} catch (e) {
			console.log("Error:", e.stack);
		}
		res.end(content);
	}
});

server.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
