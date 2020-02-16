/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      userId
      userName
      userEmail
      userPhone
      hasDog
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      userId
      userName
      userEmail
      userPhone
      hasDog
      owner
    }
  }
`;
export const onCreateDog = /* GraphQL */ `
  subscription OnCreateDog($owner: String) {
    onCreateDog(owner: $owner) {
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
export const onDeleteDog = /* GraphQL */ `
  subscription OnDeleteDog($owner: String) {
    onDeleteDog(owner: $owner) {
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
export const onCreateCourt = /* GraphQL */ `
  subscription OnCreateCourt {
    onCreateCourt {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const onUpdateCourt = /* GraphQL */ `
  subscription OnUpdateCourt {
    onUpdateCourt {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
export const onDeleteCourt = /* GraphQL */ `
  subscription OnDeleteCourt {
    onDeleteCourt {
      courtType
      availableTimeSlot
      reservedTimeSlot
    }
  }
`;
