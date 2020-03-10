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
export const createRecreation = /* GraphQL */ `
  mutation CreateRecreation(
    $input: CreateRecreationInput!
    $condition: ModelRecreationConditionInput
  ) {
    createRecreation(input: $input, condition: $condition) {
      type
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const updateRecreation = /* GraphQL */ `
  mutation UpdateRecreation(
    $input: UpdateRecreationInput!
    $condition: ModelRecreationConditionInput
  ) {
    updateRecreation(input: $input, condition: $condition) {
      type
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const deleteRecreation = /* GraphQL */ `
  mutation DeleteRecreation(
    $input: DeleteRecreationInput!
    $condition: ModelRecreationConditionInput
  ) {
    deleteRecreation(input: $input, condition: $condition) {
      type
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
