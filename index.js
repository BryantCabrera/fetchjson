"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
// since the method below is async, by calling axios.get, we will get a promise in return
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
