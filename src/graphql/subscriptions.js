/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReservations = /* GraphQL */ `
  subscription OnCreateReservations {
    onCreateReservations {
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
export const onUpdateReservations = /* GraphQL */ `
  subscription OnUpdateReservations {
    onUpdateReservations {
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
export const onDeleteReservations = /* GraphQL */ `
  subscription OnDeleteReservations {
    onDeleteReservations {
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
export const onCreateReserveTime = /* GraphQL */ `
  subscription OnCreateReserveTime {
    onCreateReserveTime {
      startTime
      endTime
    }
  }
`;
export const onUpdateReserveTime = /* GraphQL */ `
  subscription OnUpdateReserveTime {
    onUpdateReserveTime {
      startTime
      endTime
    }
  }
`;
export const onDeleteReserveTime = /* GraphQL */ `
  subscription OnDeleteReserveTime {
    onDeleteReserveTime {
      startTime
      endTime
    }
  }
`;
