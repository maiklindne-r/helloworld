var id = $.request.getParameter("id");  
    if (id === null) {  
        $.response.setContentType("text/plain");  
        $.response.addBody("id is null!");  
    }  
      
    var val1 = $.request.getParameter("val1");  
    if (val1 === null) {  
        $.response.setContentType("text/plain");  
        $.response.addBody("val1 is null!");  
    }  
      
     var output = {};  
    output.data = [];  
      
    var conn = $.db.getConnection();  
    conn.prepareStatement("SET SCHEMA \"TEST\"").execute();  
      
    var st = prepareStatement("INSERT INTO \"TABLE1\" values(?,?)");  
    st.setString(1,id);  
    st.setString(2,val1);  
    st.execute();  
    conn.commit();  
      
    var record = [];  
    record.push(id);  
    record.push(val1);  
    output.data.push(record);  
      
    conn.close();  
      
    $.response.setContentType("text/json");  
    $.response.addBody(JSON.stringify(output));  
    
