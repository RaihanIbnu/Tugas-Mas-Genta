Feature: logout from demobalze website

Scenario: John sering menggunakan komputer perpustakaan, komputer ditempat umum dapat diakses oleh siapa saja oleh karena itu John selalu log out setiap selesai mengunjungi web demoblaze

    #Given ---> Arrange, when ---> Act, Then --> Assert
    Given John use library computer and open demoblaze website
    When John want to signout from demobalze website
    Then he can logout from the website
