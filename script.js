
// Update the copyright year automatically.
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `Designed and built by Apurva · ${new Date().getFullYear()}`;
}
