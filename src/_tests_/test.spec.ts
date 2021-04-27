import app from '../server';
import request from 'supertest';

describe('Test bookController',() => {
    it('tests the POST method and return for status/book', async() => {
    const book: any = await request(app)
        .post('/book')
        .send({"BookName": "Mysql",
    "author":"rossd",
    "yearofpublish":"2004"
      });
         
    expect(book.status).toBe(200);
    
    });
});
describe('Test bookController',() => {
    it('tests the GET method and return for status/book', async(done) => {
        const book: any = await request(app)
        .get('/book')
        expect(book.status).toBe(200); 
        done()
 });
});

