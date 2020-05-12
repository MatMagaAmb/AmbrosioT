let peca = "REII";
let a = peca.toLowerCase();
//let peca = a.toLowerCase() ;
switch(a){
	case "rainha":
		console.log("rainha se move quantas casas quiser em qualquer direção ")
		break;
	case "rei":
		console.log("rei se move apenas 1 casa em qualquer dirção")
		break;
	case "torre":
		console.log("torre se move quantas casas quiser ou para frente, ou para os lados ")
		break;
	case "bispo":
		console.log("bispo se move  quantas casas quiser em diagonal ")
		break;
	case "cavalo":
		console.log("cavalo se move sempre dusa casas para um lado , e uma pra lateral")
		break;
	case "peao":
		console.log("peão se move 2 casas pra frente na primeira jogada dele, e apenas uma nas demais ")
		break;
	default:
		console.log("nome de peça errado")
}