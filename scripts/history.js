function history() {
    const hisList = document.getElementById('hisList');
    const div = document.createElement('div');
    let uniqueId = `time-${Date.now()}`;

    div.innerHTML = `<h1 id="${uniqueId}" class="text-xs mt-4 font-semibold p-1 bg-gray-200 rounded-lg my-1 mx-1">
                        You have completed the task Add Dark Mode at 
                    </h1>`;

    hisList.appendChild(div);

    let now = new Date();
    let formattedTime = now.toLocaleTimeString();
    document.getElementById(uniqueId).innerHTML += formattedTime;
}
document.getElementById('clear-btn').addEventListener('click',function(){
    const hisList = document.getElementById('hisList');
    hisList.innerHTML = '';
})
