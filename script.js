/* Top:
Rate the site
6 - star rating

//Add eventlistener and according to the ball clicked rank the site

----------------------------------------------------------------------------------------------------
OTHER PROJECT:

11 - Vertical navigation menu
12 - get data with fetch
7 - Stopwatch
14 - Google clone

---------------------------------------------------------------------------------------------------- */

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
                    document.querySelector("p.profile-description").innerHTML = `My username is <strong>${name}</strong> and my fake password is <strong>${password}</strong>. <br><br>This is an exercise simple page for the <strong>15 Projects</strong> on a daily basis.`

                }
            }
        }
    } else {
        window.alert("You did not type the Username!")
    }
}


