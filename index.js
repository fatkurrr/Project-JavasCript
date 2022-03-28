function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'batu';
    if (comp >= 0.34 && comp < 0.67) return 'kertas';
    return 'gunting';
}

function getHasil(comp, player) {
    if (player == comp) return 'SERI';
    if (player == 'batu') return (comp == 'kertas') ? 'KALAH' : 'MENANG';
    if (player == 'kertas') return (comp == 'batu') ? 'MENANG' : 'KALAH';
    if (player == 'gunting') return (comp == 'kertas') ? 'MENANG' : 'KALAH';
}

const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer ();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp: ' + pilihanComputer);
    console.log('player: ' + pilihanPlayer);
    console.log('hasil: ' + hasil);
});

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer ();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp: ' + pilihanComputer);
    console.log('player: ' + pilihanPlayer);
    console.log('hasil: ' + hasil);
});

const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer ();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    console.log('comp: ' + pilihanComputer);
    console.log('player: ' + pilihanPlayer);
    console.log('hasil: ' + hasil);
});