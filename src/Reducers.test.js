import React from 'react';
import { render } from '@testing-library/react';
import reducers from './reducers';

test('null reducer', () => {
  let state;

  state = reducers(undefined, {});

  expect(state).toEqual({
    mirror:{serviceLoading:false,serviceResponse:null}
  });
});

test('first launch reducer', () => {
  let state;

  state = reducers(
    {mirror:{serviceLoading:false,serviceResponse:null}},
    {type:'LAUNCH_MIRROR_SERVICE'}
  );

  expect(state).toEqual({
    mirror:{serviceLoading:true,serviceResponse:null}
  });
});


test('get response reducer', () => {
  let state;

  state = reducers(
    {
      mirror: {
        serviceLoading:true,
        serviceResponse: {
          error:false,
          code:200,
          message:'Field Got It',
          input:{content:'foo'}
        }
      }
    },
    {
      type:'GET_MIRROR_RESPONSE',
      payload: {
        error:false,
        code:200,
        message:'Field Got It',
        input:{content:'bar'}
      }
    }
  );

  expect(state).toEqual(
    {
      mirror: {
        serviceLoading:false,
        serviceResponse: {
          error:false,
          code:200,
          message:'Field Got It',
          input:{content:'bar'}
        }
      }
    }
  );
});

test('clean output reducer', () => {
  let state;

  state = reducers(
    {
      mirror: {
        serviceLoading:false,
        serviceResponse: {
          error:false,
          code:200,
          message:'Field Got It',
          input:{content:'foo'}
        }
      }
    },
    {type:'CLEAN_OUTPUT'}
  );

  expect(state).toEqual({
    mirror: {
      serviceLoading:false,
      serviceResponse:null
    }
  });
});

