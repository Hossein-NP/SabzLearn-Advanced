const items = document.querySelectorAll("#commentsTicker li");
let index = 0;

function showNext() {
  items.forEach((item, i) => {
    item.classList.add("hidden");
    item.classList.remove("opacity-100", "opacity-0");
  });

  const current = items[index];
  current.classList.remove("hidden");
  current.classList.add("opacity-0");

  // انیمیشن fade با transition Tailwind
  setTimeout(() => {
    current.classList.remove("opacity-0");
    current.classList.add("opacity-100");
  }, 50);

  index = (index + 1) % items.length;
}

// هر 3 ثانیه یک li نمایش داده شود
setInterval(showNext, 3000);

// نمایش اولین آیتم بلافاصله
showNext();