document.write(`
   <script src="../script/showpopup.js"></script>
    <nav id="mainNavBar">
    <ul>
    <li><p id="navBarTitle">SA-COURSES</p></li>
    <li><a href="../pages/courses.html"><img class="navBarImg" src="../content/svg/courses-svgrepo-com.svg"></a></li>
    <li><a onClick="return showPopUp()" ><img class="navBarImg" id="profileOnNav" src="../content/svg/profile-svgrepo-com.svg"></a></li>
    </ul>

    <div id="profileCard">
    <ul class="pop-up-options">
        <li><a href="../pages/aboutus.html" class="pop-up">About Us</a></li>
        <li><a href="mailto:ard.ituad@gmail.com" class="pop-up">Email Support</a></li>
        <li><a href="../pages/index.html" class="pop-up">Logout</a></li>
    </ul>
    </div>
    </nav>
`
);