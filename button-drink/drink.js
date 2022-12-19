function box(){
    let a = document.getElementById("number").innerText
    Swal.fire({
        title: 'Thank you!',
        text: "You have added " + document.getElementById("number").innerText + " " + 'drinks',
        type: 'success',
        showCancelButton: true,
        confirmButtonColor: 'LightSeaGreen',
        cancelButtonColor: 'Crimson',
        confirmButtonText: 'Okay!'
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            type: 'success',
            title: 'Thank You!',
            text: "The message to confirm is sent to your email!",
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false
          })
        }
      })
}
