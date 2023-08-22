window.addEventListener('load', function() {
  chucham();
 
}); 

function chucham(){
  var headerContent=document.querySelectorAll(".show-onVideo .show");
  var delay=400;
  for(let i=0;i<headerContent.length;i++){
      setTimeout(function(){
          headerContent[i].style.opacity=1;
      }, delay);
      delay += 400;
  }
};

window.onscroll = function() {
  var header = document.querySelector(".header");
  var headerOffset = header.offsetTop;
  
  if (window.pageYOffset > headerOffset) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
  
  // Kiểm tra khi người dùng lướt xuống 300px, hiển thị nút "Go to Top"
  var goTopButton = document.getElementById("gototop");
  if (window.pageYOffset > 300) {
    goTopButton.style.display = "block";
  } else {
    goTopButton.style.display = "none";
  }
};

// Hàm để cuộn lên đầu trang khi nhấp vào nút "Go to Top"
function goToTop() {
 var timer = setInterval(function(){
  document.documentElement.scrollTop -= 20;
  if (document.documentElement.scrollTop <=0){
    clearInterval(timer);
  }
 },1);
 
}

// hàm đăng nhập 
function login(){
  var contentlogin = document.querySelector(".content-relative .content-login");
  var a=900;
  console.log("helo");
  contentlogin.style.left=0;
  var elementcontent = document.querySelectorAll(".content .animation");
  for(let i=0 ; i<elementcontent.length;i++){
    setTimeout(function(){
      console.log("helo");
      elementcontent[i].style.opacity='1';
      elementcontent[i].style.transform='translateY(0)';
    },a)
   a+=200;
  }
}


// hàm đóng đăng nhập
async function closelogin() {
  var contentlogin = document.querySelector(".content-relative .content-login");
  var b = 170;
  var elementcontent = document.querySelectorAll(".content .animation");
  
  for (let j = elementcontent.length - 1; j >= 0; j--) {
    await new Promise(resolve => setTimeout(resolve, b));
    elementcontent[j].style.transform = 'translateY(2rem)';
    elementcontent[j].style.opacity = '0';
    console.log(j);
    b += 1;
  }
  contentlogin.style.left = "-100%";
}


// JQUERY
$(document).ready(function() {
  function handleResponsiveNav() {
    $('div.menu-mobile').click(() => {
        $('.header-mobile ul.menu-mobile').toggleClass('show')
        console.log("helo1");
    })
    
  }
  handleResponsiveNav()
  $(window).scroll(function() {
    function addAnimationElementInWindow(element) {
      setTimeout(function() {
        let rect = element.getBoundingClientRect();
        let heightScreen = window.innerHeight;
        if (!(rect.bottom < 0 || rect.top > heightScreen)) {
          element.classList.add('start');
        }
      }, 100);
    }
    
    function startAnimationScroll() {
      document.querySelectorAll('.scroll__right-to-left').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__bot-to-top').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__left-to-right').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
      document.querySelectorAll('.scroll__hide-to-see').forEach(function(element) {
        addAnimationElementInWindow(element);
      });
    } 
    startAnimationScroll();
  });
  // Gọi hàm startAnimationScroll() một lần nữa tại đây nếu bạn muốn chạy lúc ban đầu
});
