import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
ReactDOM.render(<App store={store}/>,document.getElementById("root"));
//redux不会自动更改了状态重新render要使用store.subscribe,状态改变的时候就会调用这个函数
store.subscribe(() =>{
	ReactDOM.render(<App store={store}/>,document.getElementById("root"));
});