document.getElementById('logIn').onclick = function () {
    //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容
    var userAccount = document.getElementById('userAccountId').value;
    var userPassword = document.getElementById('userPasswordId').value;
    //命名變數為抓取 input 裡面的數值，所以要用 value
    alert("哈哈，騙到你了～\r" + "帳號：" + userAccount + "\r密碼：" + userPassword);
    //使用 alert 做驗證
}