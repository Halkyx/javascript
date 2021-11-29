"use strict";

//Bài 1: Tạo 1 thẻ p có id=`text`, có nội dung bất kỳ. Yêu cầu

const part1 = () => {
	const ptext = document.querySelector(`p#text`);
	ptext.style.color = `#777`;
	ptext.style[`font-size`] = `2rem`;
	ptext.innerHTML = `Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.`;
};

// Bài 2: Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue.

const part2 = () => {
	for (let i = 1; i < document.querySelector(`ul.bai2`).childElementCount + 1; i++) {
		let queryString = `ul.bai2 > li:nth-child(${i})`;
		document.querySelector(queryString).style[`color`] = `blue`;
	}
	console.log(ulbai2);
};

// Bài 3: Sử dụng javascript để thực hiện những công việc sau

const part3 = () => {
	// let j = 0;
	// let queryString = `ul.list > li:n:th-child(${j})`;
	const ulList = document.querySelector(`ul#list`);

	for (let i = 0; i < 3; i++) {
		const j = ulList.childElementCount;
		const newli = document.createElement(`li`);
		newli.innerText = `Item ${j + 1}`;
		ulList.insertAdjacentElement(`beforeend`, newli);
	}

	const liItem = (number) => {
		return document.querySelector(`ul#list > li:nth-child(${number}`);
	};

	liItem(1).style[`color`] = `red`;
	liItem(3).style[`background-color`] = `blue`;
	liItem(4).parentNode.removeChild(liItem(4));
	const newLi = document.createElement(`li`);
	newLi.innerText = "Hello world!";
	liItem(3).insertAdjacentElement(`afterend`, newLi);
};

part1();
part2();
part3();
