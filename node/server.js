 /**
 * Created by Administrator on 2016/12/13 0013.
 */
var http=require("http");//����ģ��
http.createServer(function(req,res){//����ģ��
    res.writeHead(200,{
    "Content-Type":"text/html"
    });
    res.write("<p>vivian is here</p>>");
    res.end("<p>vivian is here</p>>")
}).listen(3000);
 console.log("vivian is here");//���
 