export default function checkControls() {
  if ('getGamepads' in navigator) {
    let hasGP = false;

    window.addEventListener('gamepadconnected', () => {
      hasGP = true;
    });

    // setup an interval for Chrome
    const checkGP = window.setInterval(() => {
      if (navigator.getGamepads()[0]) {
        if (!hasGP) {
          window.dispatchEvent(new Event('gamepadconnected'));
        }
        window.clearInterval(checkGP);
      }
    }, 500);
  }
}
