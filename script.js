let register_btn = document.queryselector(".Register-btn");
let login_btn = document.queryselector(".login-btn");
let form = document.queryselector("form-box");
register_btn.addEventListener("click",() =>{
    form.classList.add("change-form");
});
login_btn.addEventListener("click",() =>{
    form.classList.remove("change-form");
});