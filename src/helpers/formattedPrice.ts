const formattedPrice = (price: number, currencyCode: number) => {
  switch (currencyCode) {
    case 840:
      return `$${price}`
    case 978:
      return `€${price}`
    case 643:
      return `${price}₽`
    case 392:
      return `${price}¥`
  }
}

export {
  formattedPrice
}