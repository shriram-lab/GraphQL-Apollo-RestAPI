import React from "react";
import { client } from "./API/api";
import { gql } from "apollo-boost";
import AppNavBar from "./components/AppNavBar";
import NewUserDialog from "./components/NewUserDialog";
import DeleteDialogSlide from "./components/DeleteDialogSlide";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openDialog: false,
      openDeleteDialog: false,
      firstName: "",
      lastName: "",
      discription: "",
      id: "",
      allUsers: []
    };
  }

  handlerClickOpen = event => {
    this.setState({
      openDialog: true
    });
  };

  handlerDeleteSubmit = event => {
    event.preventDefault();
    const id = this.state.id;
    client
      .mutate({
        variables: { _id: id },
        mutation: gql`
          mutation deleteUser($_id: ID!) {
            deleteUser(_id: $_id) {
              _id
            }
          }
        `
      })
      .then(result => {
        this.setState({
          openDialog: false,
          openDeleteDialog:false,
          id:""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleClose = event => {
    this.setState({
      openDialog: false,
      openDeleteDialog: false,
      id: ""
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
    this.setState({
      openDeleteDialog: true,
      openDialog: false,
      id: id
    });
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
        <DeleteDialogSlide
          openDeleteDialog={this.state.openDeleteDialog}
          onHandlerClose={this.handleClose}
          onhandlerDelete={this.handlerDeleteSubmit}
        ></DeleteDialogSlide>
      </div>
    );
  }
}

export default App;
