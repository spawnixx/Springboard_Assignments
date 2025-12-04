async function loadConfig() {
  themeMod = await import("./theme.mjs");
  currentTime = new Date().getHours();

  if (currentTime < 18) {
    themeMod.setLightTheme();
  } else {
    themeMod.setDarkTheme();
  }
}

loadConfig();
