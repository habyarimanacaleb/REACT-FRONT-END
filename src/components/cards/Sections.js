import React from 'react'

const Sections = () => {
  return (
    <>
       <div class="transaction-content">
       <div class="heading">
        <h1>Transactions</h1>
        <p>...</p>
       </div>
       <div class="list-transactions">
          <div class="transaction">
            <h2 style={{textTransform:'uppercase'}}>your town cinema</h2>
            <p>transaction description</p>
          </div>
          <div class="transactio-date">
            <p>24 March</p>
          </div>
       </div>
       <div class="list-transactions">
          <div class="transaction">
            <h2 style={{textTransform:'uppercase'}}>you town utilities</h2>
            <p>transaction description</p>
          </div>
          <div class="transactio-date">
            <p>25 March</p>
          </div>
       </div>
       <div class="list-transactions">
          <div class="transaction">
            <h2 style={{textTransform:'uppercase'}}>atm deposit</h2>
            <p>transaction description</p>
          </div>
          <div class="transactio-date">
            <p>25 March</p>
          </div>
       </div>
       <div class="list-transactions">
          <div class="transaction">
            <h2 style={{textTransform:'uppercase'}}>le petite cafe</h2>
            <p>transaction description</p>
          </div>
          <div class="transactio-date">
            <p>25 March</p>
          </div>
       </div>
       <div class="list-transactions">
          <div class="transaction">
            <h2 style={{textTransform:'uppercase'}}>el gran restraurante</h2>
            <p>transaction description</p>
          </div>
          <div class="transactio-date">
            <p>25 March</p>
          </div>
       </div>
    </div>
    </>
  )
}

export default Sections