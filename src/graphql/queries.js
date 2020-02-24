/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($limit: Int, $start: Int) {
    getUsers(limit: $limit, start: $start) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        firstName
        lastName
        userName
        userEmail
        userPhone
        hasDog {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getDog = /* GraphQL */ `
  query GetDog($id: ID!) {
    getDog(id: $id) {
      dogId
      firstName
      lastName
      breed
      dob
      sex
      bio
      owner {
        userId
        firstName
        lastName
        userName
        userEmail
        userPhone
        hasDog {
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
        dogId
        firstName
        lastName
        breed
        dob
        sex
        bio
        owner {
          userId
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
      recreationType
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
        recreationType
        availableTimeSlot
        reservedTimeSlot
      }
      nextToken
    }
  }
`;
