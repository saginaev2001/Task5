function counting(){
	var A1 = document.getElementById("s11").value;
	var B1 = document.getElementById("s12").value;
	var C1 = document.getElementById("s13").value;
	var D1 = document.getElementById("s21").value;
	var E1 = document.getElementById("s22").value;
	var F1 = document.getElementById("s23").value;
	var G1 = document.getElementById("s31").value;
	var H1 = document.getElementById("s32").value;
	var I1 = document.getElementById("s33").value;

	var A=parseInt(A1);
	var B=parseInt(B1);
	var C=parseInt(C1);
	var D=parseInt(D1);
	var E=parseInt(E1);
	var F=parseInt(F1);
	var G=parseInt(G1);
	var H=parseInt(H1);
	var I=parseInt(I1);
	var det = A*(E*I - F*H) - B*(D*I - F*G) + C*(D*H - E*G);
	document.getElementById("determinant").innerHTML = det;
	document.getElementById("Solution").innerHTMl="|A| = "+A+"("+E+"*"+I+"-"+F+"*"+H+") - "+B+"("+D+"*"+I+"*"+F+"*"+G+") +"+C+"("+D+"*"+H+"*"+E+"*"+G+") =" + det;
}