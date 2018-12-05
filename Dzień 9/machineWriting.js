const spanText = document.querySelector(".text");
const spanCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eum fuga dignissimos voluptatem cupiditate provident laboriosam. Voluptate temporibus perspiciatis asperiores velit nihil dolores doloremque veniam totam omnis ratione nam saepe, quos ab architecto excepturi? Excepturi reiciendis eligendi sapiente unde error enim animi. Porro omnis, in amet nesciunt eius, ipsa delectus odit provident ratione eligendi unde asperiores voluptates esse odio quasi earum exercitationem perferendis dolore cum. Quidem odio, totam nobis vero ex culpa amet soluta numquam mollitia dignissimos, quibusdam perspiciatis nostrum eius molestias laborum. Omnis cupiditate quaerat tempora. Ducimus reiciendis nisi, dolorem ipsum dolore quasi voluptatem dicta, quis animi, rem aspernatur?'

let indexText = 0;
const timeInterval = 5;

const addLetters = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}

const cursorAnimation = () => {
    spanCursor.classList.toggle("active");
}

const indexTyping = setInterval(addLetters, timeInterval);
setInterval(cursorAnimation, 400);