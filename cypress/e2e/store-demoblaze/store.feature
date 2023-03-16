Feature: demoblaze store transaction

Scenario:  Ketika Budi mengunjungi web demoblaze dia menemukan barang yang menarik agar mudah menemukannya Budi memasukkan barang yang dia suka ke dalam keranjang

    #Given ---> Arrange, when ---> Act, Then --> Assert
    Given Budi visit demobalze website
    When Budi found an item that he like
    Then he can add the item to cart and place an order
