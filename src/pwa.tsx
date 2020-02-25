declare var app;

if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log(
      "[PWA Builder] active service worker found, no need to register"
    );
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("sw.js", {
        scope: "./"
      })
      .then(function(reg) {
        console.log(
          "[PWA Builder] Service worker has been registered for scope: " +
            reg.scope
        );
      });
  }
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", e => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  app.run("@showInstallPromotion", deferredPrompt);
});

window.addEventListener("load", () => {
  if (navigator["standalone"]) {
    console.log("Launched: Installed (iOS)");
  } else if (matchMedia("(display-mode: standalone)").matches) {
    console.log("Launched: Installed");
  } else {
    console.log("Launched: Browser Tab");
  }
});

window.addEventListener("appinstalled", evt => {
  console.log("a2hs installed");
  app.run("@appinstalled");
});

app.on("@appinstall", e => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
  });
});

app.on("@showInstallPromotion", () => {});
app.on("@appinstalled", () => {});
