function transpose_up(step, cifra) {
    while (step >= 12) step -= 12;
    while (step <= -12) step += 12;
    if (step < 0) step += 12;
    let cifraUp = [];
    cifra = cifra.split("");
    while (step > 0) {
        for (let i = 0, j = 0; i < cifra.length; i++, j++) {
            switch (cifra[i]) {
                case 'A':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'A';
                        cifraUp[j + 1] = '#';
                        j++;
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'B';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'A';
                            i++;
                            break;
                        }
                    }
                case 'B':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'C';
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'C';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'B';
                            i++;
                            break;
                        }
                    }
                case 'C':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'C';
                        cifraUp[j + 1] = '#';
                        j++;
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'D';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'C';
                            i++;
                            break;
                        }
                    }
                case 'D':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'D';
                        cifraUp[j + 1] = '#';
                        j++;
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'E';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'D';
                            i++;
                            break;
                        }
                    }
                case 'E':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'F';
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'F';
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'E';
                            i++;
                            break;
                        }
                    }
                case 'F':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'F';
                        cifraUp[j + 1] = '#';
                        j++;
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'G';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'F';
                            break;
                        }
                    }
                case 'G':
                    if (cifra[i + 1] != 'b' && cifra[i + 1] != '#') {
                        cifraUp[j] = 'G';
                        cifraUp[j + 1] = '#';
                        j++;
                        break;
                    }
                    else {
                        if (cifra[i + 1] == '#') {
                            cifraUp[j] = 'A';
                            i++;
                            break;
                        }
                        if (cifra[i + 1] == 'b') {
                            cifraUp[j] = 'G';
                            i++;
                            break;
                        }
                    }
                default:
                    cifraUp[j] = cifra[i];
                    break;
            }
        }
        cifra = cifraUp;
        cifraUp = [];
        step--;
    }
    cifra = cifra.join('');
    return cifra;
}