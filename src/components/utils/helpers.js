<<<<<<< HEAD
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store';
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Show from '../clients/assets/show_password.png';
import Hide from '../clients/assets/hide_password.png';

export const Helper = ui => {
  return {
    ...render(
      <Provider store={store}>
          <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store,
  }
}
=======
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const Helper = ui => {
    return {
        ...render(
            <Provider store={store}>
                <BrowserRouter>{ui}</BrowserRouter>
            </Provider>
        ),
        store
    };
};
>>>>>>> 9276a1f1f9c0946939cf3396f200694c2e9582bc