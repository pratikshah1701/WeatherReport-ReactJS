var React=require('react');
var {Link}=require('react-router');


var Examples = React.createClass({
  render :function(){
    return (

      <div>
        <h1 className="text-center">Example !</h1>
        <p>Here are a few example location to try out:</p>
        <ol>
          <li>
            <Link to='/?location=los angeles'>Los Angeles,CA</Link>
          </li>
          <li>
            <Link to='/?location=austin'>Austin,TX</Link>
          </li>
        </ol>
      </div>
      );
}
});


module.exports=Examples;
