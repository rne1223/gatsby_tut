import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default class product extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1> Product Page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            doloribus incidunt delectus veniam enim obcaecati voluptatum labore,
            velit qui numquam.
          </p>
        </div>
      </Layout>
    )
  }
}
