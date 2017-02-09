var React=require('react');

var About = React.createClass({
      render : function(){
        return(
          <div>
            <h1 className="text-center page-title"> About Component</h1>
            <p>This is a weather application built in React.</p>
            <p>Here are the some of the links I have used</p>
            <ul>
              <li>
                <a href="https://facebook.github.io/react">React</a> - This was the javascript frame work used.
              </li>
              <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I used openWeatherMap to search for weather data by
                  city name
              </li>
            </ul>

        </div>
        );
      }

});


module.exports=About;
