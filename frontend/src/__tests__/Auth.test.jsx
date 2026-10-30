import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import agent from '../agent';
import reducer from '../reducer';
import { promiseMiddleware } from '../middleware';
import Register from '../components/Register';
import Login from '../components/Login';

vi.mock('../agent', () => ({
  default: {
    Auth: { register: vi.fn(), login: vi.fn() },
    setToken: vi.fn(),
  },
}));

function renderWithStore(component) {
  const store = createStore(reducer, applyMiddleware(promiseMiddleware));
  render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );
}

// The API responds to invalid input with errors keyed by field
const apiError = (errors) => ({ response: { body: { errors } } });

describe('Register form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('[TC-014] [unit] shows the error when the API rejects a blank email', async () => {
    agent.Auth.register.mockRejectedValue(apiError({ email: ["can't be blank"] }));
    renderWithStore(<Register />);

    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));

    expect(await screen.findByText("email can't be blank")).toBeInTheDocument();
  });

  it('[TC-014] [unit] shows the error when the API rejects a blank password', async () => {
    agent.Auth.register.mockRejectedValue(apiError({ password: ["can't be blank"] }));
    renderWithStore(<Register />);

    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));

    expect(await screen.findByText("password can't be blank")).toBeInTheDocument();
  });

  it('[TC-014] [unit] sends the typed values to the API', async () => {
    agent.Auth.register.mockRejectedValue(apiError({ email: ['has already been taken'] }));
    renderWithStore(<Register />);

    await userEvent.type(screen.getByPlaceholderText('Username'), 'qauser');
    await userEvent.type(screen.getByPlaceholderText('Email'), 'qa@example.com');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'secret123');
    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));

    await waitFor(() =>
      expect(agent.Auth.register).toHaveBeenCalledWith('qauser', 'qa@example.com', 'secret123')
    );
  });

  it('[unit] disables the submit button while the request is in progress', async () => {
    agent.Auth.register.mockReturnValue(new Promise(() => {}));
    renderWithStore(<Register />);

    const button = screen.getByRole('button', { name: 'Sign up' });
    await userEvent.click(button);

    await waitFor(() => expect(button).toBeDisabled());
  });
});

describe('Login form', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('[unit] shows the error when credentials are rejected', async () => {
    agent.Auth.login.mockRejectedValue(apiError({ 'email or password': ['is invalid'] }));
    renderWithStore(<Login />);

    await userEvent.type(screen.getByPlaceholderText('Email'), 'wrong@example.com');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'wrongpassword');
    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(await screen.findByText('email or password is invalid')).toBeInTheDocument();
    expect(agent.Auth.login).toHaveBeenCalledWith('wrong@example.com', 'wrongpassword');
  });
});
