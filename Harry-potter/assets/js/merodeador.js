

//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["no son buenas"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["travesura realizada"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"es-ES",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Listo para trabajar!");
        });
    },250);
}

startContinuousArtyom();
