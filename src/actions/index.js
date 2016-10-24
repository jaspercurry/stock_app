
export function fetchTickers(term) {
  const url = "https://sandbox.tradier.com/v1/markets/search?q="+term
  const tickers = fetch(url, {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer trl0qhB04I6CL7EXAnDFsDc6JFKy"
  }
}).then(response => { return response.json()}).then(tickerPayLoad => { return tickerPayLoad})

  return { type: 'FETCH_TICKERS',
            payload: tickers
          }
}


export function fetchData(companies) {
  if (companies.length > 0) {
    const url = "https://sandbox.tradier.com/v1/markets/quotes?symbols="+companies
    const stockInfo = fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer trl0qhB04I6CL7EXAnDFsDc6JFKy"
    }
  }).then(response => { return response.json()}).then(tickerPayLoad => { return tickerPayLoad})
    return { type: 'FETCH_DATA',
            payload: stockInfo
            }
  } else {
    return { type: 'FETCH_DATA',
            payload: []
            }
  }
}

export function setCompanies(companies) {
  return { type: 'FETCH_COMPANIES',
            payload: companies
          }
}

export function fetchHistory(company) {
  const url = "https://sandbox.tradier.com/v1/markets/history?symbol="+company+"&interval=monthly"
  const history = fetch(url, {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer trl0qhB04I6CL7EXAnDFsDc6JFKy"
  }
}).then(response => { return response.json()}).then(tickerPayLoad => { return tickerPayLoad})
debugger
  return { type: 'FETCH_HISTORY',
            payload: history
          }
}
