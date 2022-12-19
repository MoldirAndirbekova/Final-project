function box(){
    let a = document.getElementById("number").innerText
    swal({
        title: "You have added " + document.getElementById("number").innerText + " " + "drink",
        text: "",
        icon: 'success',
        button: 'Close'
    });
}