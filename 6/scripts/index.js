var s=document.querySelector(".header__toogle"),i=document.querySelector(".navigation"),f=document.querySelector(".main__header"),p=document.querySelector(".promo"),d="header__toogle--open",r="header__toogle--close",c="hidden",v="absolute",S="no-js",g=window.innerWidth;s.addEventListener("click",()=>{s.classList.contains(d)?(s.classList.remove(d),s.classList.add(r),i.classList.remove(c)):(s.classList.remove(r),s.classList.add(d),i.classList.add(c))});g<768&&(i.classList.add(c),s.classList.remove(c),f.classList.add(v),p.classList.add(S));var y=document.querySelectorAll(".adventures__item"),o=document.styleSheets[0];y.forEach((e,n)=>{let t=n+1;o.insertRule(`
          .adventures__item:nth-child(${t})::before {
              content: '${t}';
          }
      `,o.cssRules.length),o.insertRule(`
          @media screen and (max-width: 767px) {
              .adventures__item:nth-child(${t})::before {
                  content: none;
              }
          }
      `,o.cssRules.length)});var E=document.querySelector(".example-cat__slider"),l=document.querySelector(".example-cat__button-slider"),x=document.querySelector(".example-cat__slide--one"),q=document.querySelector(".example-cat__slide--two"),a=!1;function u(e){let n=E.getBoundingClientRect(),t=e-n.left;t=Math.max(0,Math.min(t,n.width)),x.style.clipPath=`inset(0 ${n.width-t}px 0 0)`,q.style.clipPath=`inset(0 0 0 ${t}px)`,l.style.left=`${t}px`}function m(e){a=!0,e.preventDefault(),u(L(e))}function h(e){a&&u(L(e))}function _(){a=!1}function L(e){return e.touches?e.touches[0].clientX:e.clientX}l.addEventListener("mousedown",m);document.addEventListener("mousemove",h);document.addEventListener("mouseup",_);l.addEventListener("touchstart",m);document.addEventListener("touchmove",h);document.addEventListener("touchend",_);
