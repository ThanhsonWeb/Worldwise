// src/utils/helpers.js
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function emojiToCountryCode(emoji) {
  if (!emoji) return "";
  const codePoints = [...emoji].map(char => char.codePointAt(0));
  return codePoints
    .map(cp => String.fromCharCode(cp - 127397)) // regional indicator offset
    .join("");
}
