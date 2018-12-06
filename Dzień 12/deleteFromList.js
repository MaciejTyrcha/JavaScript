const removeTask = (e) => {
    e.target.parentNode.remove();
}

document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask));