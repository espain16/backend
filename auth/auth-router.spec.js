const db = require("../data/dbConfig");
const request = require("supertest");
const user = require("./auth-model");
const server = require("./auth-router");

// //test endpoints 
// //register - testing 
// //login test status codes 


// //what am i trying to allow and not allow 
// /* 
// 1. write a test to register a successful user
// 2. if the user password field is missing should return an error 422
// 3. if input a username and password correctly 
// 4. only unique users should be able to register 


describe('auth-router.js', () => {
    it('responds with json', function(done) {
        request(server)
            .post('/auth/register')
            .send({email:'bab@ayh.com',password: 'ueemsd'})
            .set('Accept', 'application/json')
            .expect(200, done)
            
    })
})