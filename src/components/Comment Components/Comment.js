import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            titleInput: this.props.comment.title,
            commentInput: this.props.comment.comment
        }
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleTitleInput = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleCommentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        })
    }

  
    render() {
    return (
      <div className="commentcontainer-comment" key={this.props.comment.id}>
      { this.state.editing
        ? <input 
          value={this.state.titleInput} 
          onChange={this.handleTitleInput}/>
        : <h4>{this.props.comment.title}</h4>
        }

        { this.state.editing }
        

        <input 
            value={this.state.commentInput} 
            onChange={this.handleCommentInput}/>
        <p>{this.props.comment.comment}</p>
        <button onClick={this.submitEdit}>Submit</button>
        <button onClick={this.toggleEditing}>Edit</button>
        <p className="commentcontainer-date">{this.props.comment.date}</p>
      </div>
    );
  }
}


export default Comment