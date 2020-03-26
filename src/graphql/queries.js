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
export const getRecreation = /* GraphQL */ `
  query GetRecreation($id: ID!) {
    getRecreation(id: $id) {
      type
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const listRecreations = /* GraphQL */ `
  query ListRecreations(
    $filter: ModelRecreationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecreations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        availableTimeSlot
        reservedTimeSlot
      }
      nextToken
    }
  }
`;
