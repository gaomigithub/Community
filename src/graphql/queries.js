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
          creationTime
          TTL
          picture
          park
        }
        nextToken
      }
      picture
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
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
        picture
      }
      creationTime
      TTL
      picture
      park
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
        picture
      }
      creationTime
      TTL
      picture
      park
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
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
export const checkReservation = /* GraphQL */ `
  query CheckReservation($date: AWSDate!) {
    checkReservation(date: $date) {
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
export const getCheckInList = /* GraphQL */ `
  query GetCheckInList($parkName: String!) {
    getCheckInList(parkName: $parkName) {
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
        picture
      }
      creationTime
      TTL
      picture
      park
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
