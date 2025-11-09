const judgment = document.getElementById("judgment");

judgment.addEventListener("click", () => {
    // 入力値を数値に変換
    const number = document.getElementById("number").value;

    // 数字を入力しているかの判定
    if (number === "") {
        alert("数字を入力してください");
        return
    }

    if (number % 2 === 0) {
        alert("偶数です");
    } else {
        alert("奇数です");
    }
});