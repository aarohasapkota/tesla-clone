import React from 'react'
import styled from "styled-components"
import Section from "./Section"


const Container = styled.div`
    height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section 
        title = "The Cybertruck"
        description = "Unleash the electrifying BEAST"
        backgroundImg = "cybertruck.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Exixsting Inventory" 
      />
      <Section 
        title = "Model S"
        description = "Order Online for touchless delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Exixsting Inventory" 
      />
      <Section 
      title = "Model 3"
      description = "Order Online for touchless delivery"
      backgroundImg = "model-3.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Exixsting Inventory" />
      <Section 
      title = "Model X"
      description = "Order Online for touchless delivery"
      backgroundImg = "model-x.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Exixsting Inventory" />
      
      <Section 
      title = "Model Y"
      description = "Order Online for touchless delivery"
      backgroundImg = "model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Exixsting Inventory" />

<Section 
      title = "Lowest Cost Solar Panel"
      description = "Save 30% on Electricity Every Year!"
      backgroundImg = "solar-panel.jpg"
      leftBtnText = "Pre-Order"
      rightBtnText = "Notify" />
    </Container> 
  )
}

export default Home


    



 