(function main(){ 
	alert('toto');

	$('#idbtn1').on('click', function() {
		boucle();
	});
	$('#idbtn2').on('click', function() {
		boucle2();
	});

	function boucle(){
			var tab = new Array(3);
			
			for (var i=0;i<tab.length;i++)
				{
					tab[i]=i*i;					
				}
				
			alert(tab);
		}
		
	function boucle2(){
			var longueur=parseInt(prompt('Quelle est la longueur souhaitée du tableau?(max 50)'));
			if (isNaN(longueur) || longueur < 0 || longueur > 50){
				alert("rien");
				return false;
			}
			var tab= new Array();
			
			for (var i=0;i<longueur;i++)
				{
					tab[i]=i*i;					
				}
				
			alert(tab);
		}			

})();