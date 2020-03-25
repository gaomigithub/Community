/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      userName
      userEmail
      userPhone
      dog {
        items {
          id
          ownerID
          dogName
          breed
          age
          sex
          picture
        }
        nextToken
      }
    }
  }
`;
export const getDogs = /* GraphQL */ `
  query GetDogs($id: ID!) {
    getDogs(id: $id) {
      id
      ownerID
      dogName
      breed
      age
      sex
      owner {
        id
        firstName
        lastName
        userName
        userEmail
        userPhone
        dog {
          nextToken
        }
      }
      picture
    }
  }
`;
export const getReservations = /* GraphQL */ `
  query GetReservations($id: ID!) {
    getReservations(id: $id) {
      id
      userID
      date
      time {
        startTime
        endTime
      }
      type
    }
  }
`;
export const listReservationss = /* GraphQL */ `
  query ListReservationss(
    $filter: ModelReservationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        date
        time {
          startTime
          endTime
        }
        type
      }
      nextToken
    }
  }
`;
export const getReserveTime = /* GraphQL */ `
  query GetReserveTime($id: ID!) {
    getReserveTime(id: $id) {
      startTime
      endTime
    }
  }
`;
export const listReserveTimes = /* GraphQL */ `
  query ListReserveTimes(
    $filter: ModelReserveTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReserveTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        startTime
        endTime
      }
      nextToken
    }
  }
`;
