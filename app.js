window.addEventListener("load", () => {
	//window đang chạy sự kiện là load
	const forms = document.querySelector(".form");
	const input = document.querySelector(".input");
	const todoListContainer = document.querySelector(".todolist-container");

	const show = () => {
		let data = localStorage.getItem("list") // lấy list ?(nếu tồn tại)
			? JSON.parse(localStorage.getItem("list")) // gán giá trị cho data
			: []; // :(nếu k có ) gắn giá trị rỗng
		todoListContainer.innerHTML = ``;
		data.map((d, index) => {
			const itemtodo = document.createElement("div"); // tạo một thẻ div
			itemtodo.innerHTML = `
		<span class ="text">${d}</span>
		<button class ="edit">Edit</button>
		<button class ="delete">Delete</button>
		`; // tạo thẻ span, button trong div
			todoListContainer.appendChild(itemtodo); // add div vao todolis-container
		});
		// delete
		const alldelete = document.querySelectorAll(".delete");
		alldelete.forEach((button, index) => {
			button.addEventListener("click", () => {
				data.splice(index, 1); // xoa cat khi click
				localStorage.setItem("list", JSON.stringify(data)); // luu lai
				show();
			});
		});

		//edit chinh sua
		const alledit = document.querySelectorAll(".edit");
		alledit.forEach((button, index) => {
			button.addEventListener("click", () => {
				const newTodo = prompt("Enter new Todo");
				data[index] = newTodo;
				localStorage.setItem("list", JSON.stringify(data));
				show();
			});
		});
	};

	show();
	show();
	forms.addEventListener("submit", (m) => {
		m.preventDefault();
		const inputvalue = input.value;
		let data = localStorage.getItem("list") // lấy list ?(nếu tồn tại)
			? JSON.parse(localStorage.getItem("list")) // gán giá trị cho data
			: []; // :(nếu k có ) gắn giá trị rỗng
		input.value = ``;
		data.push(inputvalue); // them inputvalue vao data
		localStorage.setItem("list", JSON.stringify(data));

		show();
	});
});
// click menu
const listmenu = document.querySelector(".list-menu");
const lists = document.querySelector(".list");
const menu = document.querySelector(".menu");

listmenu.addEventListener("click", () => {
	lists.classList.add("list-under");
});
const xoa = document.querySelector(".xoa");
xoa.addEventListener("click", () => {
	lists.classList.remove("list-under");
});
