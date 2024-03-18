const holder = document.getElementsByClassName("below-menu-holder");
      
      var active = 0;

      function activate() {
          for (let x = 0; x < holder.length; x++) {
              if (x == active) {
                  holder[x].classList.add("border-t-4", "bg-red-400/0");
              } else {
                  holder[x].classList.remove("border-t-4", "bg-red-400/0");
              }
          }
      }

      for ( let x = 0; x < holder.length; x++ ) {
          holder[x].addEventListener("click", () => {
              active = x;
              activate();
          })
      }
      activate();
