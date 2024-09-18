import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';


function SportsRadarWidget() {
  useEffect(() => {
    // Check if script is already added to avoid adding multiple times
    if (!window.USW) {
      const script = document.createElement('script');
      script.src = "https://widgets.media.sportradar.com/uscommon/widgetloader";
      script.async = true;
      script.setAttribute("n", "USW");
      script.onload = () => {
        // Initialize the widget once the script is loaded
        window.USW = function () {
          (window.USW.q = window.USW.q || []).push(arguments);
        };
        window.USW('addWidget', '#sr-widget', 'us.season.mlb.standingscarousel', {
          onItemClick: function (type, obj) {
            alert('uniqueTeamId: ' + obj.uniqueTeamId);
          }
        });
      };
      document.body.appendChild(script);
    } else {
      // Initialize the widget if script is already present
      window.USW('addWidget', '#sr-widget', 'us.season.mlb.standingscarousel', {
        onItemClick: function (type, obj) {
          alert('uniqueTeamId: ' + obj.uniqueTeamId);
        }
      });
    }
  }, []);

  return (
    <Container>  
    <div className="container">
      {/* Standings Widget */}
      <div id="sr-widget"></div>
    </div> 
    </Container>
  );
}

export default SportsRadarWidget;
