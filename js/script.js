 var feedback = document.querySelector(".location-button");
    var popup = document.querySelector(".modal-feedback");
    var close = popup.querySelector(".modal-close");
    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=name]");
    var password = popup.querySelector("[name=e-mail]")
    var isStorageSupport = true;
    var storage = "";

    try {
      storage = localStorage.getItem("name");
    } catch (err) {
      isStorageSupport = false;
    }
    
    feedback.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      if (storage) {
        name.value = storage;
        password.focus();
      } else {
      name.focus();
    }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!name.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      } else { 
        if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
      
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });