// connect to Moralis server
Moralis.initialize("");
Moralis.serverURL = "https://ns8gvq4jzzf7.usemoralis.com:2053/server";

      // add from here down
      async function login() {
        let user = Moralis.User.current();
        if (!user) {
          user = await Moralis.Web3.authenticate();
        }
        console.log("logged in user:", user);
      }

      async function logOut() {
        await Moralis.User.logOut();
        console.log("logged out of wallet");
      }

      async function submitForm() {
        let address = document.getElementById("emailAddress").value;
        console.log(address);
    }
    submitForm();

    document.getElementById("button").addEventListener("click", submitForm);
    document.getElementById("btn-login").onclick = login;
    document.getElementById("btn-logout").onclick = logOut;
