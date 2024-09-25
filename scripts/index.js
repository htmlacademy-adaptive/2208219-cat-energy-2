var s=document.querySelector(".header__toogle"),l=document.querySelector(".navigation"),p=document.querySelector(".header"),r=document.querySelector(".promo"),i="header__toogle--open",u="header__toogle--close",d="hidden",v="absolute",S="no-js",g=window.innerWidth;s.addEventListener("click",()=>{s.classList.contains(i)?(s.classList.remove(i),s.classList.add(u),l.classList.remove(d)):(s.classList.remove(u),s.classList.add(i),l.classList.add(d))});g<768&&(l.classList.add(d),s.classList.remove(d),p.classList.add(v),r&&r.classList.add(S));var y=document.querySelectorAll(".adventures__item"),o=document.styleSheets[0];y.forEach((e,n)=>{let t=n+1;o.insertRule(`
          .adventures__item:nth-child(${t})::before {
              content: '${t}';
          }
      `,o.cssRules.length),o.insertRule(`
          @media screen and (max-width: 767px) {
              .adventures__item:nth-child(${t})::before {
                  content: none;
              }
          }
      `,o.cssRules.length)});var E=document.querySelector(".example-cat__slider"),c=document.querySelector(".example-cat__button-slider"),x=document.querySelector(".example-cat__slide--one"),q=document.querySelector(".example-cat__slide--two"),a=!1;function L(e){let n=E.getBoundingClientRect(),t=e-n.left;t=Math.max(0,Math.min(t,n.width)),x.style.clipPath=`inset(0 ${n.width-t}px 0 0)`,q.style.clipPath=`inset(0 0 0 ${t}px)`,c.style.left=`${t}px`}function m(e){a=!0,e.preventDefault(),L(_(e))}function h(e){a&&L(_(e))}function f(){a=!1}function _(e){return e.touches?e.touches[0].clientX:e.clientX}c&&(c.addEventListener("mousedown",m),document.addEventListener("mousemove",h),document.addEventListener("mouseup",f),c.addEventListener("touchstart",m),document.addEventListener("touchmove",h),document.addEventListener("touchend",f));
