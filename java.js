
"using strict"

        var r = 300;
		var circles = document.querySelectorAll('.circle');
		var total_circles = circles.length;
		for (var i = 0; i < total_circles; i++) {
		    circles[i].setAttribute('r', r);
		}
		/* set meter's wrapper dimension */
		var meter_dimension = (r * 2) + 100;
		var wrapper = document.querySelector('#wrapper');
		wrapper.style.width = meter_dimension + 'px';
		wrapper.style.height = meter_dimension + 'px';
		/* add strokes to circles  */
		var cf = 2 * Math.PI * r;
		var semi_cf = cf / 2;
		var semi_cf_1by3 = semi_cf / 3;
		var semi_cf_2by3 = semi_cf_1by3 * 2;
		document.querySelector('#outline_curves')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
		document.querySelector('#low')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
		document.querySelector('#avg')
		    .setAttribute('stroke-dasharray', semi_cf_2by3 + ',' + cf);
		document.querySelector('#high')
		    .setAttribute('stroke-dasharray', semi_cf_1by3 + ',' + cf);
		document.querySelector('#outline_ends')
		    .setAttribute('stroke-dasharray', 2 + ',' + (semi_cf - 2));
		document.querySelector('#mask')
		    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
		/*bind range slider event*/
		var slider = document.querySelector('#slider');
		var lbl = document.querySelector("#lbl");
		var mask = document.querySelector('#mask');
		var meter_needle =  document.querySelector('#meter_needle');



var results = $("#results");

$(document).ready(function(){

var togglebutton =$("#togglebutton");
togglebutton.on("click",function (){
	console.log("botton clicked");
	results.toggle(500);
	if (togglebutton.text()==="hide suggestions") {togglebutton.text("show suggestions");}
	 else {togglebutton.text("hide suggestions");};

	 
	});
var lovep;
	// body...


function displayAbhi(respons) {
	results.empty();
	
	 		var num = $("#username").val();
var sum=0;

for (var i = 0; i < num.length; i++) {
	sum= sum+num[i].charCodeAt()-96;}

		var num1 = $("#crushname").val();
var sum1=0;

for (var i = 0; i < num1.length; i++) {
	sum1= sum1+num1[i].charCodeAt()-96;}

	var diff=Math.abs(sum-sum1);
	lovep=(100-diff/2);

	//limit to lovep//
	if (lovep<0) {lovep=0}

		if (lovep>100) {lovep=100}

	   var percent = lovep;
		    var meter_value = semi_cf - ((percent * semi_cf) / 100);
		    mask.setAttribute('stroke-dasharray', meter_value + ',' + cf);
		    meter_needle.style.transform = 'rotate(' + (270 + ((percent * 180) / 100)) + 'deg)';
		    lbl.textContent = percent + '%';

	if (lovep===100) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " are fabulous soul to meet , you both are just incredible in this world.God want to see you both together" +"</div>"+"</div>"}

	 if (lovep<100&&lovep>=90) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " can have very good bonding , this value is a proof of it." +"</div>"+"</div>"}

	 if (lovep<90&&lovep>=80) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " are loved ones of each other, you will be a good pair." +"</div>"+"</div>"}
	
	if (lovep<80&&lovep>=70) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " can have good understanding, try it to be make better" +"</div>"+"</div>"}	

	 	if (lovep<70&&lovep>=55) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " can have good understanding, God bless you" +"</div>"+"</div>"}	

	 	if (lovep<55) {var response="<div>"+"Dear,"+
	 "<div class='title'>"+ $("#username").val() +"</div>"+
	 "<div>" + "you and "+ $("#crushname").val() + " are not good ones to meet, try with another" +"</div>"+"</div>"}	
		$("#meter_needle").show();
		$("#meter").show();
	
	 $("#results").append(response);
	 $("#percent").empty();
	 $("#percent").append(lovep+"%");
	 $("#h2").text("Your love percent is :");
	$("#percent").show();


       };
	


$("#loginform").on("submit",function(data){ 
	
	var username= $("#username").val();
	var crushname= $("#crushname").val();
	if (username && crushname) {
		$("#errorshown").empty();
				$("#loginform").hide();
	$("#loggedin").show();
	$("#results").show();
	$("#togglebutton").show();
	displayAbhi(data);


    } else {
    	console.log("error happened");
    	$("#errorshown").text("Both names are mandetory!");
    
    }

	return false;
    })
$("#logoutbutton").on('click',function(){

	$("#loginform").show();
	$("#results").hide();
	$("#togglebutton").hide();
	$("#loggedin").hide();
	$("#percent").hide();
	$("#h2").empty();
	results.empty();
	results.text("Please login to see all the information.")

		$("#meter_needle").hide();
		$("#meter").hide();
})

});

 


	
        