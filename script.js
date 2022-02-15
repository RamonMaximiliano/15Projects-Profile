function createProfile() {
    let name = document.getElementById("username").value

    //VALIDATING USERNAME
    if (name != '') {

        let password = document.getElementById("password").value
        let firstPart = password.split("@")

        //validating the @ in the e-mail, and the quantity of @s
        if (firstPart.length < 2 || firstPart.length > 2) {
            window.alert("You did not type a valid e-mail!")

        } else {

            //VALIDATING THE .com in the e-mail and the quantityt of .coms
            let array2 = firstPart[1]
            let secondPart = array2.split(".com")

            console.log(firstPart[1])
            console.log(secondPart)

            if (secondPart[1] != '' || secondPart.length > 2) {
                window.alert("You did not type a valid e-mail!")
            } else {
                let imageLoaded = document.getElementById("Image").files[0];

                //validating if an image was provided
                if (imageLoaded == undefined) {
                    window.alert("You did not provide an image!")
                } else {

                    //é obrigatório o .src= URL.createObjectURL(imageLoaded)
                    document.getElementById("uploadedImage").src = URL.createObjectURL(imageLoaded)
                    document.querySelector("h1.profile-title").innerHTML = name
                    document.querySelector("p.profile-description").innerHTML = `My username is <strong>${name}</strong> and my fake E-mail is <strong>${password}</strong>. <br><br>This is an exercise simple page for the <strong>15 Projects</strong> on a daily basis.`

                }
            }
        }
    } else {
        window.alert("You did not type the Username!")
    }
}


let ratingArray = document.querySelectorAll("div.rating");

//Getting ID of elenet clicked from array of elements
for (let ball of ratingArray) {
    ball.addEventListener("click", ratePage)
}

function ratePage(events) {
    let rateResult = events.target.id

    if (rateResult == 'star1') {
        document.getElementById("star1").classList.add("star1clicked")
        document.getElementById("star2").classList.add("star1clicked")
        document.getElementById("star3").classList.add("star1clicked")
        document.getElementById("star4").classList.add("star1clicked")
        document.getElementById("star5").classList.add("star1clicked")
        document.querySelector("div.finalresult").innerHTML = ("<strong><h1 style='color:red;'>BAD</h1></strong>")
    } else if (rateResult == 'star2') {
        document.getElementById("star1").classList.add("star2clicked")
        document.getElementById("star2").classList.add("star2clicked")
        document.getElementById("star3").classList.add("star2clicked")
        document.getElementById("star4").classList.add("star2clicked")
        document.getElementById("star5").classList.add("star2clicked")
        document.querySelector("div.finalresult").innerHTML = ("<strong><h1 style='color:orange;'>Ok</h1></strong>")
    }
    else if (rateResult == 'star3') {
        document.getElementById("star1").classList.add("star3clicked")
        document.getElementById("star2").classList.add("star3clicked")
        document.getElementById("star3").classList.add("star3clicked")
        document.getElementById("star4").classList.add("star3clicked")
        document.getElementById("star5").classList.add("star3clicked")
        document.querySelector("div.finalresult").innerHTML = ("<strong><h1 style='color:rgb(129, 127, 3);'>Fine</h1></strong>")
    }
    else if (rateResult == 'star4') {
        document.getElementById("star1").classList.add("star4clicked")
        document.getElementById("star2").classList.add("star4clicked")
        document.getElementById("star3").classList.add("star4clicked")
        document.getElementById("star4").classList.add("star4clicked")
        document.getElementById("star5").classList.add("star4clicked")
        document.querySelector("div.finalresult").innerHTML = ("<strong><h1 style='color:rgb(164, 192, 6);'>Good</h1></strong>")
    }
    else if (rateResult == 'star5') {
        document.getElementById("star1").classList.add("star5clicked")
        document.getElementById("star2").classList.add("star5clicked")
        document.getElementById("star3").classList.add("star5clicked")
        document.getElementById("star4").classList.add("star5clicked")
        document.getElementById("star5").classList.add("star5clicked")
        document.querySelector("div.finalresult").innerHTML = ("<strong><h1 style='color:green;'>Excellent</h1></strong>")
    }

}