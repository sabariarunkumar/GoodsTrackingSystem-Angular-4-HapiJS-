var  Hapi = require('hapi');
var mysql = require('mysql');
var s=50;
var o,tp,a;
var r="";
var i;
var flag='y';
var fans;
var total=0;
var code,name,pric,gst_data,total_price;
var bid,qa;
var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "products1"
});

const server = new Hapi.Server({
	host : 'localhost',
	port : 1345
});

con.connect(function(err)
{
	if(err)
	{
	console.log('Error at the Connection  '+err);
	return;
	}

	
});


server.route({
	method : 'GET',
	path : '/',
	handler:function(request,reply){
		console.log("desgek");	
		con.query("SELECT * FROM product_details",function(err,result,fields)
		{
																	
			if(err) 
			{
				console.log('error at query   '+err);
				return;		
			} 
			if(result)
			{
			
				fans=result;
				console.log("xvcok");
				 
			}	
		});
		 return fans;
		
		
	}
});



const init = async () => {

   await server.start();
   console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

   console.log(err);
   process.exit(1);
});

init()