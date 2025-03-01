document.getElementById('card-1-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        if(convertedTaskNumber==1){
            alert('congrats!!! You have completed the current Task')
        }
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-1-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});
document.getElementById('card-2-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-2-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});
document.getElementById('card-3-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-3-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});
document.getElementById('card-4-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-4-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});
document.getElementById('card-5-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-5-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});
document.getElementById('card-6-button').addEventListener('click', function(event) {
    const taskNumber = document.getElementById('task-num').innerText;
    const convertedTaskNumber = parseInt(taskNumber);
    if (convertedTaskNumber > 0) {
        alert('Board Updated Successfully');
        const ans = convertedTaskNumber - 1;
        const ans1=String(ans);
        document.getElementById('task-num').innerText = 0+ans1; 
        const button = document.getElementById('card-6-button');
        button.disabled = true;
        button.style.backgroundColor = 'gray'; 
    }
});



