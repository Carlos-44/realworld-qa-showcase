Feature: User Profile
  As a signed-in RealWorld app user
  I want to update my profile settings and view my article count
  So that I can maintain my public presence

  Scenario: [TC-012] User can update their profile settings
    Given a user account exists via the API and I am signed in
    When I navigate to the settings page
    And I update my bio with a unique value
    And I click "Update Settings"
    Then I should be redirected to the home page
    And my profile page should display the new bio

  Scenario: [TC-013] User profile page displays correct article count
    Given a user account exists with two articles via the API and I am signed in
    When I visit the user's profile page
    Then 2 article previews should be displayed
    And both articles should be visible in the list
