      function printBulletList(heading, headingLevel, bulletArray, noOfColsRequested) {

      //Divide number of items in bullet array by no of requested columns to determine
      //How many rows will be needed
        var noOfRows = Math.ceil(bulletArray.length/noOfColsRequested);
        
      //If no of cols requested exceeds no. of bullets then set no of cols to no. of bullets  
        var noOfCols;
        if (bulletArray.length < noOfColsRequested)
          noOfCols = bulletArray.length;
        else
          noOfCols = noOfColsRequested;
          
       //Write html for heading, followed by unordered list column by column
//        document.write("<div class='wrapper' style='clear:both;'>");  
       document.write("<div class='wrapper'>");  
        document.write("<p>");
        
        //Heading level 0 is used when there is no heading, and no space desired between successive
        //columns of bullets
        if (headingLevel > 0) {
          document.write("<h"+headingLevel+">"+heading+"</h"+headingLevel+">");
//          document.write("<br>");
        }
        for (i=0; i<noOfCols; i++) {
          if (headingLevel > 0)
            document.write("<ul style='float: left; top-margin: 0; bottom-margin: 0;'>");
          else
            document.write("<ul style='float: left; top-margin: 0; bottom-margin: 0;'>");
          for (j=0; j< noOfRows; j++) {
            //since last row may not be fully populated, do not write if reached end of bullet array
            if ((i + noOfCols*j) < bulletArray.length)
              document.write("<li>"+bulletArray[i+noOfCols*j]+"</li>");
                }
          document.write("</ul>");
        }
        document.write("</p>");
 //       if (headingLevel > 0)
//          document.write("<br>");
        document.write("</div>");
        document.write("<p style='clear:both'>&nbsp;</p>");
      }
