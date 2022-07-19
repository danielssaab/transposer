# transposer
<pre style="max-width=400px;">
Transpositor de cifras de progressão de acordes

Esse html é uma pequena aplicação capaz de transpor cifras e anotações de progressão de acordes em formato texto, facilitando rapidamente a necessidade dos musicos que faz anotações eventualmente em bloco de notas ou similar.

O arquivo transposer.js possui somente uma função, que recebe um inteiro 'steps' e uma string 'cifra'. 'steps' diz quantos semitons a string 'cifra' será aumentada, se 'steps' for negativo a função converte esse valor para o correspondente positivo (exemplo: -5 semitons == +7semitons).

A função é capaz de ignorar quaisquer caracteres que não sejam no formato cifra, modificando apenas as seguintes ocorrências:
A Ab A# B Bb B# C Cb C# D Db D# F Fb F# G Gb G#
Como a função não leva o tom original em consideração, ela não irá gerar transposições com bemóis, a fim de simplificar a quantidade de parametros a ser passado.

Na pagina em questao os botoes + e - chamam a função com parametro +1 e -1, respectivamente, o botao central armazena o valor atual de transposição,  sendo possível com esse valor, resetar a string ao valor inicial. Ao atingir valores maiores que 11 ou menres que -11, o valor do botão central retorna a 0.


Exemplos de string a ser tratada pelo transpositor

I   [Bb lick]
a   [Eb| %| Gm| F] (Eb)
R   [ Bb| F| Cm| Eb ] (solo)


=============================================================

i   [G|%C!|G!]
a   [C%|D%|G b~|D/F# a|
    |Em%!|C%|D!%|G%|
    |A!%|C|D!]
r   [C%%|C!D!|Em%|D%!]
    |C|D!|G!]
f   [C%%|C!D!|Em%C!|G!]


=============================================================


I   (c#... ag#f# g# f#f#:)
a   [F#m|D|A|E]
pr  [D|E|F#m|D|Bm..]
fim=i   d c#b f#f#f#


(note que anotações de notas em char minusculo não é transposta)
=============================================================
</pre>
