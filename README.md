# CodeSync Starter (Beginner Edition)

This is the first frontend milestone for a Collaborative Coding Platform.

## What works now
- Dark-themed coding workspace UI
- Monaco code editor with HTML, CSS and JavaScript starter files
- Run button that combines files into a sandboxed iframe preview
- Add a new HTML/CSS/JS file
- Save the current files and project name in this browser's localStorage
- Download a simple text export of your project

## What does not work yet
- User registration/login
- Cloud/database persistence
- Real-time multi-user collaboration
- Chat and online user presence
- Proper ZIP export

Those will be added in later milestones. The current save is only in the browser where you use it.

## How to run it

1. Install Node.js LTS from https://nodejs.org/
2. Extract the ZIP.
3. Open the extracted `codesync-starter` folder in Visual Studio Code.
4. In VS Code, choose **Terminal → New Terminal**.
5. Run these commands one at a time:

   ```bash
   npm install
   npm run dev
   ```

6. Vite prints a local address, usually `http://localhost:5173/`. Hold Ctrl and click it, or copy it into your browser.
7. Edit `index.html`, `style.css`, or `script.js`, then click **Run**.

## If something goes wrong
- Confirm the VS Code terminal is inside the folder that contains `package.json`.
- Make sure Node.js is installed. Test with `node -v` and `npm -v`.
- If a dependency installation fails, check your internet connection and try `npm install` again.
- Send the terminal error text or a screenshot for help.

## Next development milestones
1. Add Express server and MongoDB.
2. Add secure authentication and project APIs.
3. Add room access controls.
4. Add Yjs-based shared documents and a WebSocket provider.
5. Persist shared document updates safely.
6. Test with two browsers and deploy.
