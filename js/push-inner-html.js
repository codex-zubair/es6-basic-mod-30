document.getElementById('bg-color').addEventListener('click',()=>{


    const friends = document.getElementsByClassName('friends');

    for(friend of friends)
    {
        friend.style.backgroundColor = 'red'
    }

    
})



document.getElementById('btn-center').addEventListener('click', ()=>{
    document.getElementById('p-center').style.textAlign = 'center'
})


// Push Html inside main under section.

document.getElementById('btn-push').addEventListener('click', (event)=> {
    const pushDiv = document.createElement('div');

    pushDiv.innerHTML = `<h1>My friend-${6}</h1>
    <p>This is my friend list</p>`;

    event.target.parentNode.children[0].appendChild(pushDiv);
})