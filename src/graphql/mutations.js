/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: userInput!) {
    createUser(input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: userInput!) {
    updateUser(input: $input) {
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
export const createDog = /* GraphQL */ `
  mutation CreateDog($input: dogInput!) {
    createDog(input: $input) {
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
export const updateDog = /* GraphQL */ `
  mutation UpdateDog($input: dogInput!) {
    updateDog(input: $input) {
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
export const createReservation = /* GraphQL */ `
  mutation CreateReservation($input: ReservationInput!) {
    createReservation(input: $input) {
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
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation($id: ID!) {
    deleteReservation(id: $id) {
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
export const createReserveTime = /* GraphQL */ `
  mutation CreateReserveTime(
    $input: CreateReserveTimeInput!
    $condition: ModelReserveTimeConditionInput
  ) {
    createReserveTime(input: $input, condition: $condition) {
      startTime
      endTime
    }
  }
`;
export const updateReserveTime = /* GraphQL */ `
  mutation UpdateReserveTime(
    $input: UpdateReserveTimeInput!
    $condition: ModelReserveTimeConditionInput
  ) {
    updateReserveTime(input: $input, condition: $condition) {
      startTime
      endTime
    }
  }
`;
export const deleteReserveTime = /* GraphQL */ `
  mutation DeleteReserveTime(
    $input: DeleteReserveTimeInput!
    $condition: ModelReserveTimeConditionInput
  ) {
    deleteReserveTime(input: $input, condition: $condition) {
      startTime
      endTime
    }
  }
`;
