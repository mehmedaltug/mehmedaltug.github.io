function card_generator(link, name, desc){
	return (
		'<div class="card"><h3>' +
		name + "</h3><p>" + desc +
		"</p>" +
		(link != null ? 
			'<a href="'+link+'">Github</a>' :
			"Github Not Available"
		) + "</div>"
	);
}

const fade = document.getElementById("fade");
const content_bar = document.getElementById("content-bar")

const projects = [
	[
		card_generator(null, "Tictactoe Bot", "A mini-max bot that can perfectly play tictactoe. Does implement aplha-beta pruning."),
		card_generator(null, "Perusal Bot", "A bot that reads the screen, re-fortmats the read text and writes the changed version to bypass filters."),
		card_generator("https://github.com/mehmedaltug/wordle-bot", "Wordle Bot", "A bot that can find today's wordle in least steps. Has a database of words and an algorithm to eliminate reduntant words.")
	],
	[
		card_generator("https://github.com/mehmedaltug/simple-cpu", "Simple CPU", "A simple 8 register (plus input), 4 operation, 4 cycle cpu that can perform addition and subtraction.")
	],
	[
		card_generator("https://github.com/mehmedaltug/zed-windows-portable", "Zed Portable Launcher", "A launcher program to automatically start Zed Editor in a portable manner.")
	],
	[
		card_generator("https://github.com/mehmedaltug/tabletizer-desktop", "Tabletizer Desktop", "Desktop part of the Tabletizer that handles mouse movements, local server and device communications."),
		card_generator("https://github.com/mehmedaltug/tabletizer-mobile", "Tabletizer Mobile", "Mobile part of the Tabletizer that handles connection to servers and input translation."),
		card_generator("https://github.com/mehmedaltug/expo-baseline", "EXPO Baseline", "A pre configured EXPO Nativewind project that has all the necessary tools to start developing mobile apps.")
	],
	[
		card_generator("https://github.com/mehmedaltug/Simpasm", "Simpasm", "A custom language compiler that makes it easy to write assembly. Compiles to assembly instructions."),
		card_generator("https://github.com/leykuph/Comp-201-Project", "SPA", "A gui program, algorithm and data-class trilogy that finds shortest path between any two cities. (group project)")
	],
	[
		card_generator("https://github.com/mehmedaltug/TinyForge-OS", "TinyForge OS", "A simple operating system that is written in pure assembly that provides a python-like environment to the user.")
	]
]

async function select_icon(id){
	fade.className = "fade-active";
	await new Promise((promise) => setTimeout(promise, 800))

	let content = "";
	projects[id].forEach((card) => {
		content += card;
	});
	content_bar.style.gridTemplateColumns = "repeat("+ projects[id].length+", 1fr)";
	content_bar.innerHTML = content;

	for(let i = 0; i < 6; i++){
		let icon = document.getElementById(i);
		console.log(icon);
		if(i == id)
			icon.className = "img-active";
		else
			icon.className = "img-deactive";
	}
	fade.className = "fade-deactive";
}