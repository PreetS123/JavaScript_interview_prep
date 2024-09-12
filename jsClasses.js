

class User {
    constructor(username, email){
          this.username= username;
          this.email = email;
    }

    capitalize(){
        return `${this.username.toUpperCase()}`;
    }
}


let UserDetails= new User("Preeti","preeti@gmail.com");
console.log(UserDetails.capitalize());


// Classes are basically syntaticall sugar in js which are introduce after ES6

/**
 * https://medium.com/swlh/oop-concept-in-javascript-119f03b0a134#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3YjkzOTc3MWE3ODAwYzQxM2Y5MDA1MTAxMmQ5NzU5ODE5MTZkNzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTUwODM1MjY3MTM4Nzk2NDM0ODYiLCJlbWFpbCI6InByZWV0YmhhcmR3YWo1MTdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5iZiI6MTcyNjEwOTE0NiwibmFtZSI6IlByZWV0aSBTaGFybWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTHViTi1UbnJTelZPQl82cVlQUm92LWZyQTNFeXBFRVo2OVJCcjd6ZXFuQVJySDdoOD1zOTYtYyIsImdpdmVuX25hbWUiOiJQcmVldGkiLCJmYW1pbHlfbmFtZSI6IlNoYXJtYSIsImlhdCI6MTcyNjEwOTQ0NiwiZXhwIjoxNzI2MTEzMDQ2LCJqdGkiOiIxNTBkMDcwZWE2Mjc3ZmNhMTExZGM1MGMyYjkwNzFlZjAyNmZiNjExIn0.P-mbWbQI6fCYQsa8w9gQuCE0PuOdyMeNjKDaa-uSEUi0ylN-frzyauX11C4zWKG6nrI9Zitst_8A-Mb3t-poJyPdHooJtZvksJ7477bkXqmRNnNGxmuTK8l-n6CCjt7YP8CMKxa7yOTh3LBgVpYzSjOB-j-kdrSbgmL_00tPy8a992yzk_uZxMRM6tlXqkSCkYikTlxrd6Wn13qrAuUv6OLIaxL0NAvpdBPaC2UuzV8bjx6QpHceObjSy-Bdpc1ZrsKLX5SYBJgofJ6Aa5fi1WArbra9pXRljswXIDiQWtMFp7jf9Ad7yfE5jSOifa0334y-6S03yjrbiu0lpWE0YQ
 * If their wouldn't be any classes in js then how we are going to create the functionality.
 * We would be creating using functions.
 */

/*
function Users(username,email){
    this.username= username;
    this.email = email;
}

let userDetails1= new Users("gopu","abc@gmail.coom");
console.log(userDetails1.username)
*/
