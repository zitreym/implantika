function list_check() {
    var value_of_price = document.querySelector(".price-cat-list").value;
    var best_price = document.querySelector("#best-price")
    var breket_price = document.querySelector("#breket-price")
    var repair_price = document.querySelector("#repair-price")
    var replace_price = document.querySelector("#replace-price")
    var clear_price = document.querySelector("#clear-price")
    var remove_price = document.querySelector("#remove-price")
    var healht_price = document.querySelector("#healht-price")
    switch (value_of_price) {
        case "best-price":
            best_price.classList.remove('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "breket-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.remove('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "repair-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.remove('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "replace-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.remove('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "clear-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.remove('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "remove-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.remove('price-hiden')
            healht_price.classList.add('price-hiden')
            break;
        case "healht-price":
            best_price.classList.add('price-hiden')
            breket_price.classList.add('price-hiden')
            repair_price.classList.add('price-hiden')
            replace_price.classList.add('price-hiden')
            clear_price.classList.add('price-hiden')
            remove_price.classList.add('price-hiden')
            healht_price.classList.remove('price-hiden')
            break;
    }
}
