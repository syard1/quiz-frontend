// const { type } = require("os");
// const { json } = require("stream/consumers");

const text = document.querySelector(".div-text")
const img = document.querySelector(".div-img")
const section = document.querySelector("section");
const btn = document.getElementById("check")
const mainImg = document.querySelector(".div-img")
const labelBtn = document.querySelector(".checkbtn")
const logBtn = document.getElementById("login") //login page
const homeBtn = document.getElementById("home")
const aboutBtn = document.getElementById("about")
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector(".register-link")
const about = document.querySelector(".about")
const loginLink = document.querySelector(".login-link");
const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form");

var anchors = document.querySelectorAll('ul a');
var person = [{ name: "admin", email: "admin@gmail.com", password: "admin" }, { name: "ardi", email: "admin@gmail.com", password: "123" }]
var isLabelBtnClicked = false
var isAboutBtnClicked = false
var isLogBtnClicked = false
var isHomeBtnClicked = true

// Your functions
const loginEventFunction = () => {
    about.classList.remove("about-active");
    text.style.display = "none";
    wrapper.classList.add("loging-active");
    img.style.display = "block";
    img.classList.add("loging-active");
    isLogBtnClicked = true;
    isHomeBtnClicked = false;
    isAboutBtnClicked = false;
    btn.checked =false;
    updateSectionVisibility()


  };
  
  const homeEventFunction = () => {
    isHomeBtnClicked =true
    about.classList.remove("about-active");
    text.style.display = "block";
    img.style.display = "block";
    wrapper.classList.remove("loging-active");
    img.classList.remove("loging-active");
    btn.checked =false
    updateSectionVisibility()

  };
  
  const labelEventFunction =()=>{
     //Kur klikohet butoni jep true 
     if(!btn.clicked){
    isAboutBtnClicked =false
    isHomeBtnClicked =false
    isLogBtnClicked =false
    btn.clicked =false
    updateSectionVisibility()

}
updateSectionVisibility()

  }
  


  // Function to update section visibility
  function updateSectionVisibility() {
    const windowWidth = window.innerWidth;
    console.log(windowWidth)
    if(btn.checked  && windowWidth>1600){   //Ekzekutoet kur butoni nuk eshte aktiv
        img.classList.remove("active");
        text.style.display = "block";
        img.style.display = "block"
        btn.checked = false
    }

    if(btn.checked  || isHomeBtnClicked || isLogBtnClicked || isAboutBtnClicked || windowWidth>1600){   //Ekzekutoet kur butoni nuk eshte aktiv
        console.log(btn.checked)
        btn.checked =false
    if (windowWidth <= 700 && isHomeBtnClicked) {
      text.style.display = "none";
      img.classList.add("active");
    } 
    else if(isHomeBtnClicked) {
        img.classList.remove("active");
        text.style.display = "block";

    }
  
    else if (windowWidth <= 1600 && isLogBtnClicked) {
        text.style.display = "none";
        img.style.display = "none";
        img.classList.remove("active");
        wrapper.classList.add("window")
    }
     else if(isLogBtnClicked){
      loginEventFunction();
    }
    


    }
    else {
        console.log("Shqipria")
        text.style.display = "none"
        img.style.display = "none";
        img.classList.remove("active");
        wrapper.classList.remove("loging-active")
        about.classList.remove("about-active");

    }
    }
  
  



  // Event listeners
  
  logBtn.addEventListener('click', loginEventFunction);
  homeBtn.addEventListener('click', homeEventFunction);
  labelBtn.addEventListener("click", labelEventFunction)
  aboutBtn.addEventListener('click', () => {
    isAboutBtnClicked = true;
    isHomeBtnClicked = false;
    isLogBtnClicked = false;
    wrapper.classList.remove("loging-active");
    btn.checked = false;
    text.style.display = "none";
    img.style.display = "none";
    about.classList.add("about-active");
  });
  
  // Call the function when the page loads
  updateSectionVisibility();
  
  // Add event listener for window resize
  window.addEventListener("resize", updateSectionVisibility);




  //Butoni i regjistrimit tek login forma 
  
registerLink.onclick = () => {
    wrapper.classList.add("active")
}


loginLink.onclick = () => {
    wrapper.classList.remove("active")
}


//Kur deshirojme mu logu 
function getLoginForm() {

    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    
    
        // console.log(username)
        let isValid = validatte(username, password)
    
        if (isValid) {
    
    window.location.href = "courses.html"
    var n = document.getElementById("after")
        n.style.background = "red"
    console.log(n)
    }
    else{
        alert("Bad credentical")
        document.getElementById("login-form").reset();
    
    }
    }
    
    
    function validatte(username, password) {
    
        for (let i = 0; i < person.length; i++) {
            if (person[i].name == username && person[i].password == password) {
    
                return true;
            }
    
        }
        return false;
    
    }
    
    function getSingUpForm() {
        const formData = new FormData(registerForm);
        const data = {
            email: formData.get("email"),
            name: formData.get("name"),
            password: formData.get("password")
        };
    
        fetch('http://localhost:2222/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success response
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error
        });
       
    document.getElementById("register-form").reset();
    
    
    }



    
anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function() {

        anchors.forEach(function(a) {
            a.classList.remove('clicked');
        });

        // Add 'clicked' class to the clicked anchor
        this.classList.add('clicked');
    });
});


