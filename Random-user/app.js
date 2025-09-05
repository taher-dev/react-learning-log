import { formatUser, delay } from "./utils.js";

// Fetch random user from api
async function getRandomUser() {
  try {
    console.log("⏳ Fetching random user ...");
    await delay(1500);

    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    const user = data.results[0];
    console.log("✅ User Data:\n" + formatUser(user));
  } catch (err) {
    console.log("❌ Error fetching user: ", err);
  }
}

async function main() {
  for (let i = 0; i < 3; i++) {
    await getRandomUser();
    console.log("\n-----------------\n");
  }
}

main();
