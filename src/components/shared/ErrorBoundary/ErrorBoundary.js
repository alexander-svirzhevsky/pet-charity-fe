import React from "react";
import { Container, Title, Btn, Row } from "../styles/layout"
import { colors } from "../styles/global"

export default class ErrorBoundary extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    refreshPage() {
        window.location.reload();
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <Container>
                <Row alignItems="center">
                    <Title color={colors.primary} textAlign="center" marginTop="50px">Something went wrong.</Title>
                    <Btn onClick={this.refreshPage}>Click to reload!</Btn>
                </Row>
            </Container>
        )
      }
  
      return this.props.children; 
    }
  }