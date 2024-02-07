const encodedEmail = encodeURIComponent("syard@gmail.com");
fetch(`http://localhost:2222/userTrueQuestion/syard@gmail.com`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => console.log(data[1].userAnswerId.question.question))
    .catch(error => console.error('Error:', error));