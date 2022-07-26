

Moralis.initialize("NF0clfMs0icjeSIoDBzvym2WmrhxVEkSupvqKGxD")
Moralis.serverURl = "https://h4bgzbbxgwzj.usemoralis.com:2053/server";

async function login() {
    try {
      currentUser = Moralis.User.current();
      if (!currentUser) {
        currentUser = await Moralis.authenticate();
      }
      document.getElementById("swap_button").disabled = false;
    } catch (error) {
      console.log(error);
    }
  }
  
  document.getElementById("login_button").onclick = login;