// REST

function sum(a, b, ...params) {
  return params;
}

console.log(sum(1, 6, 598, 4, 2, 4, 5, 6, 7));

// SPREAD

const user1 = {
	name: "Arthur",
	age: 21,
	college: "FIAP",
	email: "machadoparthur1@gmail.com"
};

const user2 = { ...user1, name: "Roberto" };

console.log(user2);