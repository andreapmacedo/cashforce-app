const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const api = 'http://localhost:3001';
const route = '/orders';

describe('testa a api cashforce', () => {
  
  it('deve retornar o status 200', (done) => {
    chai.request(api)
      .get(route)
      .end((_err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  
  it('deve retornar um array', (done) => {
    chai.request(api)
      .get(route)
      .end((_err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
  
  it('deve retornar um array com 3 itens', (done) => {
    chai.request(api)
      .get(route)
      .end((_err, res) => {
        expect(res.body).to.have.lengthOf(3);
        done();
      });
  });
  
  it("deve retornar um objeto com as propriedades 'nNf', 'createdAt', 'buyer', 'orderStatusBuyer', 'provider', 'value' ", (done) => {
    chai.request(api)
      .get(route)
      .end((_err, res) => {
        expect(res.body[0]).to.have.all.keys('nNf', 'createdAt', 'buyer', 'orderStatusBuyer', 'provider', 'value');
        done();
      });
  });
});
