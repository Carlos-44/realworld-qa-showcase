import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from '../reducer';
import ArticleList from '../components/ArticleList';
import ListErrors from '../components/ListErrors';

vi.mock('../agent', () => ({
  default: { Articles: {}, setPage: vi.fn() },
}));

const article = (slug, title) => ({
  slug,
  title,
  description: `About ${title}`,
  tagList: ['qa'],
  favorited: false,
  favoritesCount: 0,
  createdAt: '2026-01-01T00:00:00.000Z',
  author: { username: 'qauser', image: '' },
});

function renderList(props) {
  render(
    <Provider store={createStore(reducer)}>
      <MemoryRouter>
        <ArticleList {...props} />
      </MemoryRouter>
    </Provider>
  );
}

describe('ArticleList component', () => {
  it('[component] renders one preview per article', () => {
    renderList({
      articles: [article('a', 'Article A'), article('b', 'Article B'), article('c', 'Article C')],
      articlesCount: 3,
    });

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(3);
    expect(screen.getByText('Article B')).toBeInTheDocument();
  });

  it('[component] shows the loading state before articles arrive', () => {
    renderList({ articles: undefined });

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('[component] shows the empty state when there are no articles', () => {
    renderList({ articles: [] });

    expect(screen.getByText('No articles are here... yet.')).toBeInTheDocument();
  });

  it('[component] links each preview to its article page', () => {
    renderList({ articles: [article('my-slug', 'Linked Article')], articlesCount: 1 });

    expect(screen.getByRole('link', { name: /Linked Article/ })).toHaveAttribute(
      'href',
      '/article/my-slug'
    );
  });
});

describe('ListErrors component', () => {
  it('[component] renders each field error', () => {
    render(<ListErrors errors={{ email: ["can't be blank"], username: ['is taken'] }} />);

    expect(screen.getByText("email can't be blank")).toBeInTheDocument();
    expect(screen.getByText('username is taken')).toBeInTheDocument();
  });

  it('[component] renders nothing when there are no errors', () => {
    const { container } = render(<ListErrors errors={null} />);

    expect(container).toBeEmptyDOMElement();
  });
});
