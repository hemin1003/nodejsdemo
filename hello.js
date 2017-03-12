function hello(){
	console.log(__filename);
	console.log(__dirname);
	console.log("hello world!");
	var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
	var sub = bin.slice(2);
	sub[0] = 0x65;
	console.log(bin);
	var str = bin.toString("utf-8");
	console.log(str);
}
hello();
