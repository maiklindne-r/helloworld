    // execute query  
    var conn = $.db.getConnection();  
    var pstmt = conn.prepareStatement( "select * from DUMMY" );  
    var rs = pstmt.executeQuery();  
      
      
    // writing result set to response body  
    $.response.contentType = "text/plain";  
    if (!rs.next()) {  
        $.response.setBody( "Failed to retreive data" );  
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;  
    } else {  
        $.response.setBody("Response: " + rs.getString(1));  
    }  
      
      
    // cleanup  
    rs.close();  
    pstmt.close();  
    conn.close();  
