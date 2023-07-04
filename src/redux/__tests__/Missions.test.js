import reducer, { fetchMissionsSuccess, joinMission, leaveMission } from '../missions/missions';

describe('Test reducer and actions', () => {
  it('Reutrns initial state with no action', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Updates state correctly based on the given mission', () => {
    const missions = [{
      id: '1',
      name: 'some name',
    }];

    expect(reducer([], fetchMissionsSuccess(missions))).toEqual(missions);
  });
});

describe('Join and leave a mission', () => {
  it('Can join mission', () => {
    const initialState = [
      {
        id: '1',
        joined: false,
      },
      {
        id: '2',
        joined: false,
      },
      {
        id: '3',
        joined: false,
      },
    ];
    const expectedState = [
      {
        id: '1',
        joined: false,
      },
      {
        id: '2',
        joined: true,
      },
      {
        id: '3',
        joined: false,
      },
    ];

    expect(reducer(initialState, joinMission('2'))).toEqual(expectedState);
  });

  it('Can leave mission', () => {
    const initialState = [
      {
        id: '1',
        joined: true,
      },
      {
        id: '2',
        joined: true,
      },
      {
        id: '3',
        joined: false,
      },
    ];
    const expectedState = [
      {
        id: '1',
        joined: true,
      },
      {
        id: '2',
        joined: false,
      },
      {
        id: '3',
        joined: false,
      },
    ];

    expect(reducer(initialState, leaveMission('2'))).toEqual(expectedState);
  });
});
