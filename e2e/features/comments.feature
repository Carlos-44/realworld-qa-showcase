Feature: Article Comments
  As a signed-in RealWorld app user
  I want to post and delete comments on articles
  So that I can engage in discussions with the community

  Scenario: [TC-010] User can post a comment on an article
    Given a user account exists with an article via the API and I am signed in
    When I navigate to that article's page
    And I write and post a comment
    Then the comment card should be visible with my username

  Scenario: [TC-011] User can delete their own comment
    Given a user account exists with an article via the API and I am signed in
    When I navigate to that article's page
    And I write and post a comment
    And I delete that comment
    Then the comment should no longer be visible
