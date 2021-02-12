import { Subject } from 'rxjs';

const subject = new Subject();

const initialState = {
  seconds: 55,
  minutes: 0,
  hours: 0,
};

let state = initialState;


const counter = {
  init: () => {
    subject.next(state)
  },
  subscribe: setState => subject.subscribe(setState),
  startTime: (ref) => {
    ref.current = setInterval(() => {
      if (state.minutes === 59 && state.seconds >= 59) {
        state = {
          seconds: 0,
          minutes: 0,
          hours: state.hours + 1
        };
      } else if (state.seconds >= 59) {
        state = {
          ...state,
          seconds: 0,
          minutes: state.minutes + 1,
        }
      } else {
        state = {
          ...state,
          seconds: state.seconds + 1
        };
      }

      subject.next(state);
    }, 1000)
  },

  stopTime: (ref) => {
    clearInterval(ref.current)
  },

  clearTime: (ref) => {
    state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    clearInterval(ref.current)
    subject.next(state);
  },
  initialState
};

export default counter;