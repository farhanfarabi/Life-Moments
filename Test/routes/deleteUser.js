const expect = require('chai').expect;
const request = require('request');
const { TESTING_URL } = require('../../../constants/tests')

describe('Delete User API', () => {
  describe('No userId provided validation error', () => {

    const user_id = ' '

    it('Status', done => {
      request.delete(`${TESTING_URL}/user/${user_id}/delete`, {}, (_, response) => {
        expect(response.statusCode).to.equal(400)
        done()
      })
    })

    it('Content', done => {
      request.delete(`${TESTING_URL}/user/${user_id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.errors[0]).to.equal('You have to provide a user_id')
        done()
      })
    })
  })

  describe('Invalid user_id provided validation error', () => {

    const user_id = '5da946c270ff9000941623b0'

    it('Status', done => {
      request.delete(`${TESTING_URL}/user/${user_id}/delete`, {}, (_, response) => {
        expect(response.statusCode).to.equal(400)
        done()
      })
    })

    it('Content', done => {
      request.delete(`${TESTING_URL}/user/${user_id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.errors[0]).to.equal('Please provide a valid user_id')
        done()
      })
    })
  })

  describe('Invalid user_id provided validation error', () => {

    const user_id = '5dae2f4d860c0dff2363e317'

    it('Status & Content', done => {
      request.delete(`${TESTING_URL}/user/${user_id}/delete`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(response.statusCode).to.equal(200)
        expect(body.message).to.equal('User deleted successfully')
        done()
      })
    })
  })
})