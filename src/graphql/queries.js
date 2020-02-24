/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
      }
      nextToken
    }
  }
`;
export const getPrivateNote = /* GraphQL */ `
  query GetPrivateNote($id: ID!) {
    getPrivateNote(id: $id) {
      id
      content
      owner
    }
  }
`;
export const listPrivateNotes = /* GraphQL */ `
  query ListPrivateNotes(
    $filter: ModelPrivateNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userId
      userName
      userEmail
      userPhone
      hasDog
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        userName
        userEmail
        userPhone
        hasDog
        owner
      }
      nextToken
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
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
export const listDogs = /* GraphQL */ `
  query ListDogs(
    $filter: ModelDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCourt = /* GraphQL */ `
  query GetCourt($id: ID!) {
    getCourt(id: $id) {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const listCourts = /* GraphQL */ `
  query ListCourts(
    $filter: ModelCourtFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        courtType
        availableTimeSlot
        reservedTimeSlot
      }
      nextToken
    }
  }
`;
