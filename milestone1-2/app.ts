const toggleButton = document.getElementById('toggle-hobbies') as HTMLButtonElement
const hobby = document.getElementById('ho') as HTMLElement

toggleButton.addEventListener('click',()=> {
    if(hobby.style.display === 'none'){
        hobby.style.display = 'block'
    } else {
        hobby.style.display = 'none'
    }
});

