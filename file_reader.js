const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
const thenCatchSolution = () => {
	fs.readFile("firstname.txt", "utf8").then((firstname) => {
		fs.readFile("lastname.txt", "utf8").then((lastname) => {
			fs.readFile("age.txt", "utf8").then((age) => {
				fs.readFile("hobbies.txt", "utf8").then((hobbiesData) => {
					const hobbies = JSON.parse(hobbiesData);
					console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
				}).catch((err) => console.error(err));
			}).catch((err) => console.error(err));
		}).catch((err) => console.error(err));
	})
}
thenCatchSolution();

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const asyncAwaitSolution = async () => {
	const firstname = await fs.readFile("firstname.txt", "utf8");
	const lastname = await fs.readFile("lastname.txt", "utf8");
	const age = await fs.readFile("age.txt", "utf8");
	const hobbies = JSON.parse(await fs.readFile("hobbies.txt", "utf8"));
	console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`);
}
asyncAwaitSolution();