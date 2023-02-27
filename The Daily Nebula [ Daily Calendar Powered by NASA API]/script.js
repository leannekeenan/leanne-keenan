fetch("https://go-apod.herokuapp.com/apod")
.then(res => res.json())
.then( data => {
    console.log(data)

    document.querySelector('body').src = data.url;
    
    document.querySelector('.date').innerText = new Date().toDateString();
    document.querySelector('img').src = data.url;
    document.querySelector('h2').innerText = data.title;
    document.querySelector('.description').innerText = data.explanation;
})