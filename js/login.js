// let onClick = () => {
//     let username = document.getElementById("username")
//     let password = document.getElementById("password")

//     let config = {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         username: username.value,
//         password: password.value
//       })
//     }

//     fetch("/login", config)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result)
//         if (result.message === "Login Successful") {
//           alert(result.message)
//           window.location.href = "/"
//         }
//         // sessionStorage.setItem("login-data", JSON.stringify(result))
//       })
//       .catch(err => console.log(err))

//     username = ""
//     password = ""
//   }