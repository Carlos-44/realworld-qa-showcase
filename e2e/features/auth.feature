Feature: User Authentication
  As a RealWorld app user
  I want to register, log in, and log out
  So that I can access my personal content and manage my account

  Scenario: [TC-001] User can register a new account
    Given I am on the registration page
    When I fill in a unique username, email, and password
    And I click "Sign up"
    Then I should be redirected to the home page
    And the navigation should show my username

  Scenario: [TC-002] User can log in with valid credentials
    Given a user account exists via the API
    When I log in with that user's email and password
    Then I should be redirected to the home page
    And the navigation should show my username

  Scenario: [TC-003] Login fails with invalid credentials
    Given I am on the login page
    When I log in with "nobody@example.com" and "wrongpassword"
    Then the error messages block should be visible
    And the navigation should show "Sign in"

  Scenario: [TC-004] User can log out
    Given a user account exists via the API
    And I am logged in as that user
    When I navigate to Settings and click logout
    Then the navigation should show "Sign in"
    And the navigation should not show the username
