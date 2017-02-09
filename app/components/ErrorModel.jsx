var React=require('react');

var ErrorModel = React.createClass({


  getDefaultProps:function(){
    return{
      title:'Error'
    };
  },
  propType:{
      title:React.PropTypes.string,
      message:React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var modal=new Foundation.Reveal($('#error-model'));
    modal.open();
  },
  render: function(){
    var{title,message}=this.props;
    return(

      <div id="error-model" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
          okay
        </button>
        </p>
      </div>
    );
  }

});

module.exports=ErrorModel;
