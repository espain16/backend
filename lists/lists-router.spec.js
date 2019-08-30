const db =require("../data/dbConfig");
const request = require("supertest");
const lists = require("./lists-model");
const server = require("./lists-router");


describe('lists-router.js', ()=> {
    it ('should get all lists', async () => {
        request(server)
            .get('/api/lists')
            .expect(200)
    } )
})
