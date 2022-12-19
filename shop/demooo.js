var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  var textW = document.querySelector('.ml16');
  textW.innerHTML = textW.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml16 .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 30 * i
    }).add({
      targets: '.ml16',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
    let clip = document.querySelector(".vid")
    let buttons = document.querySelector(".but")
    
    buttons.addEventListener("mouseover", function (e) {
       clip.play();
    })

   
    buttons.addEventListener("mouseout", function (e) {
       clip.pause();
    })
    let clips = document.querySelector(".vide")
    let buttonss = document.querySelector(".butt")

    buttonss.addEventListener("mouseover", function (e) {
       clips.play();
    })


    buttonss.addEventListener("mouseout", function (e) {
       clips.pause();
    })