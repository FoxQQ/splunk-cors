require([
    'jquery'
], function($){

function get_external(){
    console.log('get external');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));

}

function get_internal(){
    console.log('get internal');
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", "admin");
    urlencoded.append("password", "1234qwer");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://localhost:8089/services/auth/login", requestOptions)
      .then(response => {
          console.log('response.....')
          return response.text()
        })
      .then(result => {
        console.log('result')  
        console.log(result)})
      .catch(error => console.log('error', error));
}

console.log('ready!');
$('#root').append('<button id="get_external">Get external</button>');
$('#root').append('<button id="get_internal">Get internal</button>');

$('#get_external').click(get_external);
$('#get_internal').click(get_internal);

});