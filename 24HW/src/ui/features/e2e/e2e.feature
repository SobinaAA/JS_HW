@run
Feature: [UI] [Products] [e2e]

  Scenario: Create and edit product, check data
    Given I create product via API
    And I open Sales Portal
    And I login as Admin
    And I open "Products" page
    When I open "Details Modal" page for created product on "Products" page
    Then I check "name" of the product on "Details Modal" page
    And I check "price" of the product on "Details Modal" page
    And I check "manufacturer" of the product on "Details Modal" page
    And I check "amount" of the product on "Details Modal" page
    And I check "notes" of the product on "Details Modal" page
    And I click on "Close Button" on "Details Modal" page

    When I open "Edit Product" page for created product on "Products" page
    And I fill product inputs "Amount", "Price", "Manufacturer" on "Edit Product" page 
    And I click on "Save Product button" on "Edit Product" page
    And I open "Details Modal" page for created product on "Products" page
    Then I check all fields for created product on "Details Modal" page
    And I click on "Close Button" on "Details Modal" page
