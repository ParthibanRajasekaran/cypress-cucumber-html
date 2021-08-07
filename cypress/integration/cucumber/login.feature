Feature: User Login 

    User Authentication

    Scenario: Login with valid credentials
    Given I open Login Page
    When I enter valid credentials
    And Click on the login button
    Then User must be able to login

    Scenario: Login with invalid credentials
    Given I open Login Page
    When I enter invalid {username} {password}
    |username | password |
    |username | password |
    |123456   | 123456   |
    And Click on the login button
    Then User must not be able to login