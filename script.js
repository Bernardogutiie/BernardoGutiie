function calcular(renda, dependentes) {
    if (dependentes == 0) {
        return 'Erro';
    }
    else {
        percapita = renda / dependentes;
        return percapita;
    }
}