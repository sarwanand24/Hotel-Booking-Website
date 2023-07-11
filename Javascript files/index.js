 const fadeElements = document.querySelectorAll(".p");
     const picslider = document.querySelectorAll(".check");
     const picslider2 = document.querySelectorAll(".check2");
     const picslider3 = document.querySelectorAll(".check3");
     const colorchange = document.querySelectorAll(".fg");

     window.addEventListener("scroll" , function(){
        var picto = document.querySelector(".slide1");
        var picto2 = document.querySelector(".slide2");
        var picto3 = document.querySelector(".slide3");
        var picto4 = document.querySelector(".book");

        fadeElements.forEach(element => {
            let elementPos = element.getBoundingClientRect().top;
            if (elementPos <= 565){
                element.classList.add("fade"); 
            }
            else{
                element.classList.remove("fade");
            }
        })

        picslider.forEach(element => {
            let elementPos2 = element.getBoundingClientRect().top;
            if (elementPos2 <= 565){
                picto.classList.add("sl1");
            }
            else{
                picto.classList.remove("sl1");
            }
        })

        picslider2.forEach(element => {
            let elementPos3 = element.getBoundingClientRect().top;
            if (elementPos3 <= 565){
                picto2.classList.add("sl1");
            }
            else{
                picto2.classList.remove("sl1");
            }
        })

        picslider3.forEach(element => {
            let elementPos4 = element.getBoundingClientRect().top;
            if (elementPos4 <= 565){
                picto3.classList.add("sl1");
            }
            else{
                picto3.classList.remove("sl1");
            }
        })

        colorchange.forEach(element => {
            let elementPos9 = element.getBoundingClientRect().top;
            if (elementPos9 <= 565){
                picto4.classList.add("book-color");
            }
            else{
                picto4.classList.remove("book-color");
            }
        })

     })

     document.getElementById("scroll-top").addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
   })

   document.getElementById("btn1").addEventListener("click", function(){
             window.location = "book.html";
   })

   document.getElementById("btn2").addEventListener("click", function(){
             window.location = "book.html";
   })

        </script>

    <script>

        var myIndex = 0;
        carousel();
        function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 4 seconds
    }
    
