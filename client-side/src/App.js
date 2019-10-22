import React from "react";
import AppNavBar from "./components/AppNavBar";
import NewUserDialog from "./components/NewUserDialog";
import { client } from "./API/api";
import { gql } from "apollo-boost";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openDialog: false,
      firstName: "",
      lastName: "",
      discription: "",
      allUsers: []
    };
  }

  handlerClickOpen = event => {
    this.setState({
      openDialog: true
    });
  };

  handleClose = event => {
    this.setState({
      openDialog: false
    });
  };
  handlerClickSubmit = event => {
    event.preventDefault();
    const datauser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      discription: this.state.discription
    };

    client
      .mutate({
        variables: datauser,
        mutation: gql`
          mutation register(
            $firstName: String!
            $lastName: String!
            $discription: String!
          ) {
            register(
              firstName: $firstName
              lastName: $lastName
              discription: $discription
            ) {
              firstName
              lastName
              discription
            }
          }
        `
      })
      .then(result => {
        this.setState(
          {
            openDialog: false
          },
          this.getUserData()
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  HandleDelete = id => {
console.log(id)
  };

  handleChange = event => {
    const field = event.target.name;
    this.setState(
      {
        [field]: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  getUserData = () => {
    client
      .query({
        query: gql`
          {
            currentUser {
              _id
              firstName
              lastName
              discription
            }
          }
        `
      })
      .then(result => {
        this.setState({
          allUsers: result.data.currentUser
        });
      });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <div className="App">
        <AppNavBar
          onHandlerClick={this.handlerClickOpen}
          allUsers={this.state.allUsers}
          onHandleDelete={this.HandleDelete}
        ></AppNavBar>
        <NewUserDialog
          open={this.state.openDialog}
          onHandlerClose={this.handleClose}
          onHandlerSubmit={this.handlerClickSubmit}
          onhandleChange={this.handleChange}
        ></NewUserDialog>
      </div>
    );
  }
}

export default App;
