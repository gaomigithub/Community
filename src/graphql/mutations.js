/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const addUser = /* GraphQL */ `
  mutation AddUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    addUser(input: $input, condition: $condition) {
      userId
      userName
      userEmail
      userPhone
      hasDog
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      userName
      userEmail
      userPhone
      hasDog
      owner
    }
  }
`;
export const addDog = /* GraphQL */ `
  mutation AddDog($input: CreateDogInput!, $condition: ModelDogConditionInput) {
    addDog(input: $input, condition: $condition) {
      userId
      dogName
      owner {
        userId
        userName
        userEmail
        userPhone
        hasDog
        owner
      }
    }
  }
`;
export const deleteDog = /* GraphQL */ `
  mutation DeleteDog(
    $input: DeleteDogInput!
    $condition: ModelDogConditionInput
  ) {
    deleteDog(input: $input, condition: $condition) {
      userId
      dogName
      owner {
        userId
        userName
        userEmail
        userPhone
        hasDog
        owner
      }
    }
  }
`;
export const createCourt = /* GraphQL */ `
  mutation CreateCourt(
    $input: CreateCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    createCourt(input: $input, condition: $condition) {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const updateCourt = /* GraphQL */ `
  mutation UpdateCourt(
    $input: UpdateCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    updateCourt(input: $input, condition: $condition) {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const deleteCourt = /* GraphQL */ `
  mutation DeleteCourt(
    $input: DeleteCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    deleteCourt(input: $input, condition: $condition) {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
