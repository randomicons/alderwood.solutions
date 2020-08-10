import React from 'react'
import styles from "./App.module.scss"
import "./home.svg"
import joustr from "./joustr.png"
import quotr from "./quotr.png"

function App() {
  return (
    <div className={styles.App}>
      <section className={styles.Home}>
        <div className={styles.left}/>
        <div className={styles.right}>
          <h1>Alderwood Solutions</h1>
          <p>
            This is our homebase!
            <br/>
            A bird in the hand is worth 2 in the bush
          </p>
        </div>
      </section>
      {/*<section className={styles.About}>*/}
      {/*  <h2>About</h2>*/}
      {/*  <div className={styles.people}>*/}
      {/*    <div>*/}
      {/*      */}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <section className={styles.Projects}>
        <div className={styles.project}>
          <h5>Joustr</h5>
          <img src={joustr}/>
          <p className={styles.projectDesc}>
            User created tournament brackets
          </p>
        </div>
        <div className={styles.project}>
          <h5>Quotr</h5>
          <img src={quotr}/>
          <p className={styles.projectDesc}>
            User created tournament brackets
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
