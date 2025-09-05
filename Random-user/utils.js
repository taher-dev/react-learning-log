// Format user data
export function formatUser(user) {
  const { name, email, location } = user;
  return `
    👤 ${name.first} ${name.last}
    📧 ${email}
    📍 ${location.city}, ${location.country}`;
}

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
