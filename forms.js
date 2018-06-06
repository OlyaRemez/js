function checkForm(form)
{
    if(form.name.value === "" || form.email.value === "" || form.password.value === "") {
        alert("Field is empty!");
        return false;
    }

    let regular = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    if(!regular.test(form.email.value)) {
        alert("Email is not correct");
        return false;
    }

    if(form.password.value != form.RePassword.value) {
        alert("Enter the same passwords");
        return false;
    }

    if(form.state.value === "") {
        alert("Enter gender");
        return false;
    }
}