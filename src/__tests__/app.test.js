import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from '../routes';

describe('App Screen', () => {
  beforeAll(() => {
    render(<Router />);
  });
  test('contains text in welcome screen', () => {
    expect(screen.getByText('Lets start building a beautiful application.')).toBeInTheDocument();
  });
});
