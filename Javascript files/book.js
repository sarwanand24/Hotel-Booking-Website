 // Import the functions you need from the SDKs you need
  import { initializeApp } from "/firebase-app.js";  // Import the full configuration from your own firebase account
  import { getAnalytics } from "/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNz...........-f1Q3Epo",
    authDomain: "guest-house-429.firebaseapp.com",
    projectId: "guest-house-429",
    storageBucket: "guest-house-429.appspot.com",
    messagingSenderId: "9818....8773",
    appId: "1:981806598773:web:d76.........10063c",
    measurementId: "G-CEC....E5"
  };

      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      
        import{ getDatabase, ref, set, child, get}
              from "firebase-database.js";
      
              const database = getDatabase();
      
         const name = document.getElementById("nameInp");
              const mobile = document.getElementById("mobInp");
              const address = document.getElementById("addressInp");
              const submit = document.getElementById("submit");
      
              function write(){

                var c1 = document.getElementById("dateOpen").value;
                var c2 = document.getElementById("dateClose").value;
                var room = document.getElementById("rinp").value;
              var bed3 = sessionStorage.getItem("bed2");
              var type3 = sessionStorage.getItem("type2");
              var rate3 = sessionStorage.getItem("rate2");
      
      if(name.value!="" && mobile.value!="" &&  address.value!=""){
      
        var j = Math.random() * 100;
        j = Math.floor(j);

        const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");

p.innerText = "Kumar Guest House";
p2.innerText = "Booking Id-"+name.value+j;
p3.innerText = bed3;
p4.innerText = type3;
p5.innerText = "Room-"+room;
p6.innerText = "Pay Now";
      
p.style.cssText = "color:white; font-size:medium; display:block;"
p2.style.cssText = "color:white; font-size:medium;"
p3.style.cssText = "color:white; font-size:medium;"
p4.style.cssText = "color:white; font-size:medium;"
p5.style.cssText = "color:white; font-size:medium;"
p6.style.cssText = "color:white; font-size:medium; background-color:red;float:right;width:30%;height:30px;"

document.body.append(p);
document.body.append(p2);
document.body.append(p3);
document.body.append(p4);
document.body.append(p5);
document.body.append(p6);

      const db = getDatabase();
      set(ref(db, "Guests/"+ name.value+j),{
      Name: name.value,
      Address: address.value,
      Mobile: mobile.value,
      Check_In: c1,
      Check_Out: c2,
      Rooms: room,
      Bed: bed3,
      Type: type3,
      Price: rate3,
      });
      
      swal({
      title: "Welcome!",
      text: "Your Room has been booked",
      icon: "success",
      button: "Next",
      });
      
      document.getElementById("flag-dtl").style.display = "block";
          document.getElementById("details").style.display = "none";
      
      }
      
      else{
      swal({
      text: "Please Fill All Fields",
      });
      }
      
      }
      
      submit.addEventListener("click", write);

           let today = new Date(),
      day = today.getDate(),
      day2 = today.getDate()+1,
      month = today.getMonth()+1 , 
    year = today.getFullYear();
    if(day<10){
       day = '0'+day
    }
    if(day2<10){
      day2 = '0'+day2
    }
    if(month<10){
       month = '0'+month
    }
    today = year+'-'+month+'-'+day;
   var today2 = year+'-'+month+'-'+day2;
    document.getElementById("dateOpen").setAttribute("min",today);
    document.getElementById("dateOpen").setAttribute("value",today);
    document.getElementById("dateClose").setAttribute("min",today2);
    document.getElementById("dateClose").setAttribute("value",today2);

    document.getElementById("d").addEventListener("click", function(){
    var d1 = document.getElementById("dateOpen").valueAsDate; 
    var d2 = document.getElementById("dateClose").valueAsDate;
    var diff = (d2 - d1)/(1000*60*60*24);
    var dif = diff+1;
    })

        var db = document.getElementById("db");
        var sb = document.getElementById("sb");
        var lb = document.getElementById("lb");
         var ac = document.getElementById("ac");
        var nac = document.getElementById("nac");

        document.getElementById("btn").addEventListener("click", function(){

          if(db.checked && ac.checked){
            var bed = "Doublebed";
            var type = "A.C";
            sessionStorage.setItem("bed2", bed);
            sessionStorage.setItem("type2", type);
          }

          if(db.checked && nac.checked){
            var bed = "Doublebed";
            var type = "Non-A.C";
            sessionStorage.setItem("bed2", bed);
            sessionStorage.setItem("type2", type);
          }

          if(sb.checked && ac.checked){
            var bed = "Singlebed";
            var type = "A.C";
            sessionStorage.setItem("bed2", bed);
            sessionStorage.setItem("type2", type);
          }

          if(sb.checked && nac.checked){
            var bed = "Singlebed";
            var type = "Non-A.C";
            sessionStorage.setItem("bed2", bed);
            sessionStorage.setItem("type2", type);
          }

          if(lb.checked){
            var bed = "Large Room";
            var type = "A.C";
            sessionStorage.setItem("bed2", bed);
            sessionStorage.setItem("type2", type);
          }

          var rate = document.getElementById("price").innerText;
          sessionStorage.setItem("rate2", rate);
document.getElementById("flag-dtl").style.display = "none";
  document.getElementById("details").style.display = "block";
})


document.getElementById("pref").addEventListener("click", function(){
  var nor2 = document.getElementById("rinp").value;

          if(lb.checked){
          ac.checked = true;
          nac.disabled = true;
          document.getElementById("price").innerHTML = "Rs"+ nor2*3600;
        }

        else{
          nac.disabled = false;
        }

        if(db.checked && ac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor2*2400;
        }
        if(db.checked && nac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor2*1600;
        }
        if(sb.checked && ac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor2*1600;
        }
        if(sb.checked && nac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor2*1200;
        }
})

      document.getElementById("rinp").addEventListener("click", function(){

        const dbRef = ref(getDatabase());   

get(child(dbRef, "Rooms/"+ "Available")).then((snapshot)=>{    
 if (snapshot.exists()) {
  var maxroom = snapshot.val().AvailRoom;
  document.getElementById("rinp").max = maxroom;
 }
});

                  var nor = document.getElementById("rinp").value;
                  document.getElementById("nop").innerHTML = nor * 2;

                  if(lb.checked){
          ac.checked = true;
          nac.disabled = true;
          document.getElementById("price").innerHTML = "Rs"+ nor*3600;
        }
        if(db.checked && ac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor*2400;
        }
        if(db.checked && nac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor*1600;
        }
        if(sb.checked && ac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor*1600;
        }
        if(sb.checked && nac.checked){
          document.getElementById("price").innerHTML = "Rs"+ nor*1200;
        }
            })

            class Calendar {
  
  constructor () {
    this.monthDiv = document.querySelector('.cal-month__current')
    this.headDivs = document.querySelectorAll('.cal-head__day')
    this.bodyDivs = document.querySelectorAll('.cal-body__day')
    this.nextDiv = document.querySelector('.cal-month__next')
    this.prevDiv = document.querySelector('.cal-month__previous')
  }
  
  init () {
    moment.locale(window.navigator.userLanguage || window.navigator.language) 
    
    this.month = moment()
    this.today = this.selected = this.month.clone()
    this.weekDays = moment.weekdaysShort(true)
    
    this.headDivs.forEach((day, index) => {
      day.innerText = this.weekDays[index]
    })
    
    this.nextDiv.addEventListener('click', _ => { this.addMonth() })
    this.prevDiv.addEventListener('click', _ => { this.removeMonth() })
    
    this.bodyDivs.forEach(day => {
      day.addEventListener('click', e => {
        const date = +e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML

        if (e.target.classList.contains('cal-day__month--next')) {
          this.selected = moment(`${this.month.add(1, 'month').format('YYYY-MM')}-${date}`)
        } else if (e.target.classList.contains('cal-day__month--previous')) {
          this.selected = moment(`${this.month.subtract(1, 'month').format('YYYY-MM')}-${date}`)
        } else {
          this.selected = moment(`${this.month.format('YYYY-MM')}-${date}`)
        }

        this.update()
      })
    })
    
    this.update()
  }
  
  update () {
    this.calendarDays = {
      first: this.month.clone().startOf('month').startOf('week').date(),
      last: this.month.clone().endOf('month').date()
    }
    
    this.monthDays = {
      lastPrevious: this.month.clone().subtract(1,'months').endOf('month').date(),
      lastCurrent: this.month.clone().endOf('month').date()
    }
    
    this.monthString = this.month.clone().format('MMMM YYYY')
    
    this.draw()
  }
  
  addMonth () {
    this.month.add(1, 'month')
    
    this.update()
  }
  
  removeMonth () {
    this.month.subtract(1, 'month')
    
    this.update()
  }
  
  draw () {
    this.monthDiv.innerText = this.monthString
  
    let index = 0

    if (this.calendarDays.first > 1) {
      for (let day = this.calendarDays.first; day <= this.monthDays.lastPrevious; index ++) {
        this.bodyDivs[index].innerText = day++

        this.cleanCssClasses(false, index)

        this.bodyDivs[index].classList.add('cal-day__month--previous')
      } 
    }

    let isNextMonth = false
    for (let day = 1; index <= this.bodyDivs.length - 1; index ++) {
      if (day > this.monthDays.lastCurrent) {
        day = 1
        isNextMonth = true
      }

      this.cleanCssClasses(true, index)

      if (!isNextMonth) {
        if (day === this.today.date() && this.today.isSame(this.month, 'day')) {
          this.bodyDivs[index].classList.add('cal-day__day--today') 
        }

        if (day === this.selected.date() && this.selected.isSame(this.month, 'month')) {
          this.bodyDivs[index].classList.add('cal-day__day--selected') 
        }

        this.bodyDivs[index].classList.add('cal-day__month--current')
      } else {
        this.bodyDivs[index].classList.add('cal-day__month--next')
      }

      this.bodyDivs[index].innerText = day++
    }
  }
  
  cleanCssClasses (selected, index) {
    this.bodyDivs[index].classList.contains('cal-day__month--next') && 
      this.bodyDivs[index].classList.remove('cal-day__month--next')
    this.bodyDivs[index].classList.contains('cal-day__month--previous') && 
      this.bodyDivs[index].classList.remove('cal-day__month--previous')
    this.bodyDivs[index].classList.contains('cal-day__month--current') &&
      this.bodyDivs[index].classList.remove('cal-day__month--current')
    this.bodyDivs[index].classList.contains('cal-day__day--today') && 
      this.bodyDivs[index].classList.remove('cal-day__day--today')
    if (selected) {
      this.bodyDivs[index].classList.contains('cal-day__day--selected') && 
        this.bodyDivs[index].classList.remove('cal-day__day--selected') 
    }
  }
}

const cal = new Calendar()
cal.init()
