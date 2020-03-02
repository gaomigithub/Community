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
          firstName
          lastName
          breed
          dob
          sex
          bio
          picture
        }
        nextToken
      }
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
      id
      firstName
      lastName
      breed
      dob
      sex
      bio
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
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        breed
        dob
        sex
        bio
        owner {
          id
          firstName
          lastName
          userName
          userEmail
          userPhone
        }
        picture
      }
      nextToken
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
