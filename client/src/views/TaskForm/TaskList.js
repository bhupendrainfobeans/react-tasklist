import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import { Redirect } from 'react-router'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';

import { deleteTask } from '../../actions';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          edit: false,
          edit_record_id : 0,
          record_data: [],
        }
    }

    handleEditAction = (id, record) => {
      this.setState({
        edit: true,
        edit_record_id: id,
        record_data: record
      })
    }
    render(){
        return(
          <Row>
          <Col xs="12" lg="12">
          {this.state.edit && 
          <Redirect to={{
              pathname: '/task/taskform',
              state: { 
                edit_id: this.state.edit_record_id,
                edit_data: this.state.record_data
              }
          }}/>}
          
          {this.state.edit}
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> List of tasks
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Hourly Rate</th>
                    <th>Total Cost</th>
                    <th>Created Date</th>
                    <th>Target Date</th>
                    <th>Modified Date</th>
                    <th>Status</th>
                    <th>Comment</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.tasks && this.props.tasks.map((task)=>(
                          <TaskListItem item={task} onDelete={ this.props.onDelete } handleEditAction={this.handleEditAction} key={task._id}  />
                  ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          </Row>
        );
    }

}
/**
 * Mapping the dispatch methods as component properties.
 *
 * @param {*} dispatch Dispatch method.
 */
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTask(id));
    }
  };
};

/**
 * Mapping state from state tree to component props.
 *
 * @param {*} state 
 */
const mapStateToProps = state => {
    return {
      tasks: state.tasks
    };
  };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);