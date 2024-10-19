// Chức năng phát nhạc
const music = new Audio('DLTTAD.mp3');

document.getElementById('btn__music').addEventListener('click', function () {
  if (music.paused) {
    music.play();
    this.innerHTML = 'Tạm dừng nhạc <i class="fa-solid fa-pause"></i>';
  } else {
    music.pause();
    this.innerHTML = 'Phát nhạc <i class="fa-solid fa-music"></i>';
  }
});




let datetxt = "20/10/2024";
let datatxtletter = `Mai là ngày 20/10 rồi chúc em một ngày thật vui vẻ và ý nghĩa! Mong em luôn rạng rỡ và ngập tràn niềm vui. Anh biết thời gian qua có thể đã khiến em buồn lòng, và anh thật sự xin lỗi về điều đó. Hy vọng em vẫn còn tình cảm và cho anh thêm một cơ hội nữa nha. Chúc em luôn xinh đẹp, học giỏi, không bị Viễn trêu nữa và mấy nữa thi được 27+ nhaaaa. 
                            ❤️ miss you ❤️`;

let titleLetter = "Dear Trà đào ❤️  :)))";
let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");
setTimeout(function () {
  timeDatetxt = setInterval(function () {
    if (currentIndex < charArrDate.length) {
      date__of__birth.textContent += charArrDate[currentIndex];
      currentIndex++;
    } else {
      let i = document.createElement("i");
      i.className = "fa-solid fa-star"
      document.querySelector(".date__of__birth").prepend(i)
      document.querySelector(".date__of__birth").appendChild(i.cloneNode(true))
      clearInterval(timeDatetxt)
    }
  }, 100)
}, 12000)

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function () {
  $(".box__letter").slideDown()
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000)
  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (currentIndexTitle < charArrTitle.length) {
        document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart"
        document.querySelector(".title__letter").appendChild(i)
        currentIndexTitle++;
      } else {
        clearInterval(intervalTitle)
      }
    }, 100)
  }, 2000)
  setTimeout(function () {
    document.querySelector("#heart__letter").classList.add("animationOp");
    document.querySelector(".love__img").classList.add("animationOp");
    document.querySelector("#mewmew").classList.add("animationOp");
  }, 2800)
  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation")
    })
  }, 3500)
  setTimeout(function () {
    intervalContent = setInterval(function () {
      if (currentIndexLetter < charArrDateLetter.length) {
        text__letter.textContent += charArrDateLetter[currentIndexLetter];
        currentIndexLetter++;
      } else {
        clearInterval(intervalContent)
      }
    }, 50)
  }, 6000)
})
$(".close").on("click", function () {
  clearInterval(intervalContent)
  document.querySelector(".title__letter").textContent = "";
  text__letter.textContent = "";
  currentIndexLetter = 0
  currentIndexTitle = 0
  document.querySelector("#heart__letter").classList.remove("animationOp");
  document.querySelector(".love__img").classList.remove("animationOp");
  document.querySelector("#mewmew").classList.remove("animationOp");
  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation")
  })
  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
})


//mobile

function mobile() {
  const app = {
    timeout: function (txt, dom) {
      let currentIndex = 0;
      let charArr = txt.split('')
      intervalMobile = setInterval(function () {
        if (currentIndex < charArr.length) {
          dom.textContent += charArr[currentIndex];
          currentIndex++;
        } else {
          clearInterval(intervalMobile)
        }
      }, 200)
    }
  }
  return app
}
const fcMobile = mobile()
if (window.innerWidth < 768) {
  setTimeout(() => {
    fcMobile.timeout("20", document.querySelector(".day"))
  }, 5000)
  setTimeout(() => {
    fcMobile.timeout("10", document.querySelector(".month"))
  }, 6000)
}