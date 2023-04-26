  var OUT = 0;
    var IN = 1;
     
   
    function countWords( str)
    {
        var state = OUT;
        var wc = 0; // word count
        var i = 0;
         
       
        while (i < str.length)
        {
         
          
            if (str[i] == ' ' || str[i] == '\n'||
                                  str[i] == '\t')
                state = OUT;
                 
     
          
            else if (state == OUT)
            {
                state = IN;
                ++wc;
            }
     
            ++i;
        }
         
        return wc;
    }
     
    
        var str = "One two     three\n four\tfive ";
        document.write("No of words : "
                              + countWords(str));
