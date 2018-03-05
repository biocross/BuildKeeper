import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          Download
        </button>
        <span className="text versionText">
          <strong>6.2.0.11</strong>
        </span>
        <span className="text">
          from <strong>master</strong>
        </span>
        <br/><br/>
        <span className="timeText text">
           <strong>Last Commit:</strong>
        </span>
        <br/>
        <span className="text">
           Merge 'dev' into master by [Siddharth Gupta]
        </span>
        <br/><br/>
        <span className="text timeText">
          created 26 mins ago
        </span>
      </li>
    );
  }
}
