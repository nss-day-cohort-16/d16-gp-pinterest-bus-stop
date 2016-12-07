"use strict";

app.factory("boardStorage", ($http, FBCreds) => {
	let getBoardList = () => {
		let boards = [];
		return new Promise( (resolve, reject) => {
			$http.get(`${FBCreds.URL}`)
			.success((boardObject) => {
				let boardCollection = boardObject;
				Object.keys(boardCollection).forEach((key) => {
					boardCollection[key].id = key;
					boards.push(boardCollection[key]);
				});
				resolve(boards);
			})
			.error((error) =>{
				reject(error);
			});
		});
	};
	});