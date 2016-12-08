"use strict";

//when sharing data between controllers use a factory.


app.factory("Boards", ($http, FBCreds) => {

	let getAllBoards = function () {

		let boards = [];
		return new Promise ((resolve, reject) => {
			$http.get(`${FBCreds.URL}/boards.json`)
			.success((boardObj) => {
				let boardList = boardObj;
				Object.keys(boardList).forEach((key => {
					boardList[key].id = key;
					boards.push(boardList[key]);
					console.log("functiongetall");
				}));
				resolve(boards);
			}).error((error) => {
				reject(error);
			});
		});
};


let getSingleBoard = (boardId) => {
	return new Promise ((resolve, reject) => {
		$http.get(`${FBCreds.URL}/boards.json`,angular.toJson(newBoard))
		.success((boardObj) => {
			resolve(boardObj);
		})
		.error((error) => {
			reject(error);
		});
	});
};

let postBoard = (newBoard) => {
	console.log("This is postBoard");
	return new Promise (( resolve, reject) =>{
		$http.post(`${FBCreds.URL}/boards.json`, angular.toJson(newBoard))
		.success((obj) => {
			resolve(obj);
		});
	});
};
	return {getSingleBoard, postBoard, getAllBoards};
});
