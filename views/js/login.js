document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");


  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();


    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    
      try {
     
        const response = await fetch('/login', {    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
 
        if (response.ok) {


            window.location.href = "/profile";
          } else if (response.status === 401) {


            alert("Username or password incorrect.");
          } else {
            console.error("Server error:", response.status);
            alert("An error occurred from inside.");
          }
        } catch (error) {
          console.error("An error has occurred", error);
          alert("An error has occurred.");
        }
      });
    });
