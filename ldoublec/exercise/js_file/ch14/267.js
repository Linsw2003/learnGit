function message() {
    alert("调用 外部      JS函数!sum(100,200)=" + sum(100, 200));
}
function sum(x, y) {
    return x + y;
}