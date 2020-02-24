/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: userInput!) {
    createUser(input: $input) {
      userId
      firstName
      lastName
      userName
      userEmail
      userPhone
      hasDog {
        items {
          dogId
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      owner
    }
  }
`;
export const createRecreation = /* GraphQL */ `
  mutation CreateRecreation(
    $input: CreateRecreationInput!
    $condition: ModelRecreationConditionInput
  ) {
    createRecreation(input: $input, condition: $condition) {
      recreationType
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
      recreationType
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
      recreationType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
