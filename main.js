function card_generator(link, name, desc) {
  return (
    '<div class="card"><h3>' +
    name +
    "</h3><p>" +
    desc +
    "</p>" +
    (link != null
      ? '<a href="https://github.com/' + link + '">Github</a>'
      : "Github Not Available") +
    "</div>"
  );
}

const projects = [
  [
    "COMP-302-Software-Engineering/AI_TUTOR_COMP302-Software-Project",
    "AI Tutor (Group)",
    "AI Tutor system that has student-teacher roles that uses AI to teach students about the subjects that the teaches specifies.",
  ],
  [
    null,
    "Tictactoe Bot",
    "A mini-max bot that can perfectly play tictactoe. Does implement aplha-beta pruning.",
  ],
  [
    "mehmedaltug/wordle-bot",
    "Wordle Bot",
    "A bot that can find today's wordle in least steps. Has a database of words and an algorithm to eliminate reduntant words.",
  ],
  [
    "mehmedaltug/simple-cpu",
    "Simple CPU",
    "A simple 8 register (plus input), 4 operation, 4 cycle cpu that can perform addition and subtraction.",
  ],
  [
    "mehmedaltug/zed-windows-portable",
    "Zed Portable Launcher",
    "A launcher program to automatically start Zed Editor in a portable manner. Has the ability to download or update the Zed build used.",
  ],
  [
    "cumulonimbush/Optistella-Rust-nbody-sim",
    "Rust N-Body Simulation",
    "An N-Body simulation that utilizes the Barnes-Hut algorithm. Implemeted using Rust+Bevy",
  ],
  [
    "mehmedaltug/tabletizer-remake",
    "Tabletizer Desktop",
    "Remake of my proof-of-concept project Tabletizer! Allows using old tablets or phones as graphic tablets. Remake utilizes Expo and PyWebview+PyInstaller",
  ],
  [
    "leykuph/Comp-201-Project",
    "SPA",
    "A gui program, algorithm and data-class trilogy that finds shortest path between any two cities. (group project)",
  ],
  [
    "mehmedaltug/TinyForge-OS",
    "TinyForge OS",
    "A simple operating system that is written in pure assembly that provides a python-like environment to the user.",
  ],
  [
    "mehmedaltug/aem-os",
    "AEM OS",
    "A debian based Linux distro that pre-install linuxbrew and combines stability with leading edge packages. (Ddesigned for my usecase, made public)",
  ],
]

const MAINTENANCE_MODE = false;

document.addEventListener("DOMContentLoaded", () => {
  if (MAINTENANCE_MODE)
    window.location.href = "https://mehmedaltug.github.io/maintenance.html";
  let project_container = document.getElementById("project_container");
  let content = "";
  projects.forEach((card) => {
    content += card_generator(...card);
  });
  project_container.innerHTML = content;
})