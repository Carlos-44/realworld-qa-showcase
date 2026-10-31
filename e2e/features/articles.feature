Feature: Article Management
  As a signed-in RealWorld app user
  I want to create, edit, delete, and favorite articles
  So that I can manage my published content and engage with the community

  Scenario: [TC-005] User can publish a new article
    Given a user account exists via the API and I am signed in
    When I navigate to the article editor
    And I fill in the article title, about, and body
    And I click "Publish Article"
    Then the URL should match the article page pattern
    And the article heading and body should be visible

  Scenario: [TC-006] User can edit an existing article
    Given a user account exists with an article via the API and I am signed in
    When I navigate to that article's page
    And I click "Edit Article"
    And I update the article title
    And I click "Publish Article"
    Then the article heading should show the new title

  Scenario: [TC-007] User can delete an article
    Given a user account exists with an article via the API and I am signed in
    When I navigate to that article's page
    And I click "Delete Article"
    Then I should be redirected to the home page
    And the user's profile should show no articles

  Scenario: [TC-008] User can favorite an article
    Given a user account exists with an article via the API and I am signed in
    When I view the global feed and find the article
    Then the favorite button count should be "0"
    When I click the favorite button
    Then the favorite button count should be "1"

  Scenario: [TC-009] Global feed loads and displays articles
    Given a user account exists with an article via the API and I am signed in
    When I click "Global Feed"
    Then the article should appear in the feed
    And there should be at least 1 article
