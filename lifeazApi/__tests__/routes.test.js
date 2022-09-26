import createServer from '../utils/server'

const app = createServer();
const request = require('supertest')
describe('GET Endpoints', () => {
  it('should get all defibrilateur', async () => {
    const res = await request(app)
      .get('/defibrilateur')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual(
        {"defibri": 
        [
            {"createdAt": null, "electrodesexpiry": "2025-10-05T00:00:00.000Z", "id": 1, "locationaddr": "12 Rue Jacques Prévert, 42980 Elattes", "locationname": "Mairie d'Elattes", "serial": "CLA012345678", "state": 0, "updatedAt": null},
            {"createdAt": null,"electrodesexpiry": "2025-10-05T00:00:00.000Z","id": 2,"locationaddr": "1Bis Place des Combattants, 42980 Elattes","locationname": "Gymnase Pierre Peyroche","serial": "CLA123456789","state": 0,"updatedAt": null}
        ]})
  })
})