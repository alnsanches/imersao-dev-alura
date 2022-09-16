function calcular () {
    const PrimeiroBimestre = parseFloat(document.getElementById('nota1').value);
    const SegundoBimestre = parseFloat(document.getElementById('nota2').value);
    const TerceiroBimestre = parseFloat(document.getElementById('nota3').value);
    const QuartoBimestre = parseFloat(document.getElementById('nota4').value);

    var media = ((PrimeiroBimestre + SegundoBimestre + TerceiroBimestre + QuartoBimestre) / 4).toFixed(1);

    var notaAluno = (document.getElementById('nota').innerHTML = media);


    // exibir se aluno foi aprovado ou reprovado - considerando a nota 7 como a média para ser aprovado

    if (notaAluno >= 7) {
        const statusNota = (document.getElementById('status').innerHTML = 'Aprovado!')
    } else {
        const statusNota = (document.getElementById('status').innerHTML = 'Reprovado!')
    }
}