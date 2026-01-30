import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "C:\\Users\\rosha\\Music\\web_hrray\\video_91_93";

let files = await fs.readdir(basepath);

for (const item of files) {
  console.log("running for", item);

  const fullPath = path.join(basepath, item);

  // 1️⃣ folder ho to skip
  if (fsn.lstatSync(fullPath).isDirectory()) continue;

  // 2️⃣ extension nikaalo
  const parts = item.split(".");
  if (parts.length <= 1) continue;

  const ext = parts[parts.length - 1].toLowerCase();

  // 3️⃣ js & json ko COMPLETELY ignore karo
  if (ext === "js" || ext === "json") {
    console.log("⏭ skipped", item);
    continue;
  }

  // 4️⃣ extension folder path
  const extFolderPath = path.join(basepath, ext);

  // 5️⃣ folder nahi hai to banao
  if (!fsn.existsSync(extFolderPath)) {
    fsn.mkdirSync(extFolderPath);
  }

  // 6️⃣ file move karo
  await fs.rename(
    fullPath,
    path.join(extFolderPath, item)
  );
}

console.log("✅ Done (js & json untouched)");
