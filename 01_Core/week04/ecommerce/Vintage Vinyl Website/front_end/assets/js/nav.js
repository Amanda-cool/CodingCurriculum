
// inserting HTML with JS for all Nav bars.
document.querySelector(".default_nav").innerHTML += `
<nav class="desktop_nav">
<ul class="nav-content">
    <li class="nav-indiv"><a href="about_us.html">About Us</a></li>
    <li class="nav-indiv"><a href="genres.html">Genres</a></li>
    <li class="nav-indiv" id="record"><a href="index.html">VRP</a></li>
    <li class="nav-indiv"><a href="local.html">Local</a></li>
    <li class="nav-indiv"><a href="contact.html">Contact Us</a></li>
</ul>
</nav>
<nav class="mobile_nav">
<div class="mobile_nav-visible">
    <a href="javascript:void(0);" class="icon" onclick="mobileDisplay()">
        <i class="fa fa-bars"></i>
    </a>
    <a href="index.html" class="active">VRP Home</a>
</div>
<div id="myLinks">
    <ul class="nav-content"></ul>
    <li class="nav-indiv"><a href="about_us.html">About Us</a></li>
    <li class="nav-indiv"><a href="genres.html">Genres</a></li>
    <li class="nav-indiv"><a href="local.html">Local</a></li>
    <li class="nav-indiv"><a href="contact.html">Contact Us</a></li>
    </ul>
</div>
</nav>
`;

//Mobile nav bar function
//Starting off my mind started big moving small but later on I realized it would be better to revers that thought process.
function mobileDisplay() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  