const numberApartments = document.querySelector('.number-apartments'),
    averageOccupancy = document.querySelector('.average-occupancy'),
    sendOne = document.querySelector('.water-supply__send-one');

function defineAlpha(num) {
    let x,
        arr = [[4.0, 2.210],
        [4.1, 2.246],
        [4.2, 2.281],
        [4.3, 2.317],
        [4.4, 2.352],
        [4.5, 2.386],
        [4.6, 2.421],
        [4.7, 2.456],
        [4.8, 2.490],
        [4.9, 2.524],
        [5.0, 2.558],
        [5.1, 2.592],
        [5.2, 2.626],
        [5.3, 2.660],
        [5.4, 2.693],
        [5.5, 2.726],
        [5.6, 2.760],
        [5.7, 2.793],
        [5.8, 2.826],
        [5.9, 2.858],
        [6.0, 2.891],
        [6.1, 2.924],
        [6.2, 2.956],
        [6.3, 2.989],
        [6.4, 3.021],
        [6.5, 3.053],
        [6.6, 3.085],
        [6.7, 3.117],
        [6.8, 3.149],
        [6.9, 3.181],
        [7.0, 3.212],
        [7.1, 3.244],
        [7.2, 3.275],
        [7.3, 3.307],
        [7.4, 3.338],
        [7.5, 3.369],
        [7.6, 3.400],
        [7.7, 3.431],
        [7.8, 3.462],
        [7.9, 3.493],
        [8.0, 3.524],
        [8.1, 3.555],
        [8.2, 3.585],
        [8.3, 3.616],
        [8.4, 3.646],
        [8.5, 3.677],
        [8.6, 3.707],
        [8.7, 3.738],
        [8.8, 3.768],
        [8.9, 3.798],
        [9.0, 3.828],
        [9.1, 3.858],
        [9.2, 3.888],
        [9.3, 3.918],
        [9.4, 3.948],
        [9.5, 3.978],
        [9.6, 4.008],
        [9.7, 4.037],
        [9.8, 4.067],
        [9.9, 4.097],
        [10.0, 4.126],
        [10.2, 4.185],
        [10.4, 4.244],
        [10.6, 4.302],
        [10.8, 4.361],
        [11.0, 4.419],
        [11.2, 4.477],
        [11.4, 4.534],
        [11.6, 4.592],
        [11.8, 4.649],
        [12.0, 4.707],
        [12.2, 4.764],
        [12.4, 4.820],
        [12.6, 4.877],
        [12.8, 4.934],
        [13.0, 4.990],
        [13.2, 5.047],
        [13.4, 5.103],
        [13.6, 5.159],
        [13.8, 5.215],
        [14.0, 5.270],
        [14.2, 5.326],
        [14.4, 5.382],
        [14.6, 5.437],
        [14.8, 5.492],
        [15.0, 5.547],
        [15.2, 5.602],
        [15.4, 5.657],
        [15.6, 5.712],
        [15.8, 5.767],
        [16.0, 5.821],
        [16.2, 5.876],
        [16.4, 5.930],
        [16.6, 5.984],
        [16.8, 6.039],
        [17.0, 6.093],
        [17.2, 6.147],
        [17.4, 6.201],
        [17, 6, 6, 254],
        [17.8, 6.308],
        [18.0, 6.362],
        [18.2, 6.415],
        [18.4, 6.469],
        [18.6, 6.522],
        [18.8, 6.575],
        [19.0, 6.629],
        [19.2, 6.682],
        [19.4, 6.734],
        [19.6, 6.788],
        [19.8, 6.840],
        [20.0, 6.893],
        [20.5, 7.025],
        [21.0, 7.156],
        [21.5, 7.287],
        [22.0, 7.417],
        [22.5, 7.547],
        [23.0, 7.677],
        [23.5, 7.806],
        [24.0, 7.935],
        [24.5, 8.064],
        [25.0, 8.192],
        [25.5, 8.320],
        [26.0, 8.447],
        [26.5, 8.575],
        [27.0, 8.701],
        [27.5, 8.828],
        [28.0, 8.955],
        [28.5, 9.081],
        [29.0, 9.207],
        [29.5, 9.332],
        [30.0, 9.457],
        [30.5, 9.583],
        [31.0, 9.707],
        [31.5, 9.832],
        [32.0, 9.957],
        [32.5, 10.08],
        [33.0, 10.20],
        [33.5, 10.33],
        [34.0, 10.45],
        [34.5, 10.58],
        [35.0, 10.70],
        [35.5, 10.82],
        [36.0, 10.94],
        [36.5, 11.07],
        [37.0, 11.19],
        [37.5, 11.31],
        [38.0, 11.43],
        [38.5, 11.56],
        [39.0, 11.68],
        [39.5, 11.80],
        [40.0, 11.92],
        [40.5, 12.04],
        [41.0, 12.16],
        [41.5, 12.28],
        [42.0, 12.41],
        [42.5, 12.53],
        [43.0, 12.65],
        [43.5, 12.77],
        [44.0, 12.89],
        [44.5, 13.01],
        [45.0, 13.13],
        [45.5, 13.25],
        [46.0, 13.37],
        [46.5, 13.49],
        [47.0, 13.61],
        [47.5, 13.73],
        [48.0, 13.85],
        [48.5, 13.97],
        [49.0, 14.09],
        [49.5, 14.20],
        [50, 14.32],
        [51, 14.56],
        [52, 14.80],
        [53, 15.04],
        [54, 15.27],
        [55, 15.51],
        [56, 15.74],
        [57, 15.98],
        [58, 16.22],
        [59, 16.45],
        [60, 16.69],
        [61, 16.92],
        [62, 17.15],
        [63, 17.39],
        [64, 17.62],
        [65, 17.85],
        [66, 18.09],
        [67, 18.32],
        [68, 18.55],
        [69, 18.79],
        [70, 19.02],
        [71, 19.25],
        [72, 19.48],
        [73, 19.71],
        [74, 19.94],
        [75, 20.18],
        [76, 20.41],
        [77, 20.64],
        [78, 20.87],
        [79, 21.10],
        [80, 21.33],
        [81, 21.56],
        [82, 21.69],
        [83, 22.02],
        [84, 22.25],
        [85, 22.48],
        [86, 22.71],
        [87, 22.94],
        [88, 23.17],
        [89, 23.39],
        [90, 23.62],
        [91, 23.85],
        [92, 24.08],
        [93, 24.31],
        [94, 24.54],
        [95, 24.77],
        [96, 24.99],
        [97, 25.22],
        [98, 25.45],
        [99, 25.68],
        [100, 25.91]];

    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i][0]) {
            x = i;
            break;
        }
    }

    let result = (arr[x - 1][1] + ((arr[x][1] - arr[x - 1][1]) / (arr[x][0] - arr[x - 1][0])) * (num - arr[x - 1][0])).toFixed(3);
    return result;
}

sendOne.onclick = function () {
    let numApartments = Number(numberApartments.value),
        occupancy = Number(averageOccupancy.value),
        answerOne = document.querySelector('.water-supply__answer-N-tot'),
        answerTwo = document.querySelector('.water-supply__answer-N-h'),
        answerMain = document.querySelector('.water-supply__answer-main'),
        answerSecTot = document.querySelector('.water-supply__answer-sec-tot'),
        answerSecC = document.querySelector('.water-supply__answer-sec-c'),
        answerSecH = document.querySelector('.water-supply__answer-sec-h'),
        answerNPTot = document.querySelector('.water-supply__answer-NP-tot'),
        answerNPC = document.querySelector('.water-supply__answer-NP-c'),
        answerNPH = document.querySelector('.water-supply__answer-NP-h'),
        answerAlphaTot = document.querySelector('.water-supply__answer-alpha-tot'),
        answerAlphaC = document.querySelector('.water-supply__answer-alpha-c'),
        answerAlphaH = document.querySelector('.water-supply__answer-alpha-h'),
        answerQTot = document.querySelector('.water-supply__answer-q-tot'),
        answerQC = document.querySelector('.water-supply__answer-q-c'),
        answerQH = document.querySelector('.water-supply__answer-q-h'),
        answerHrTot = document.querySelector('.water-supply__answer-hour-tot'),
        answerHrC = document.querySelector('.water-supply__answer-hour-c'),
        answerHrH = document.querySelector('.water-supply__answer-hour-h'),
        answerNPTotHr = document.querySelector('.water-supply__answer-NP-tot-hr'),
        answerNPCHr = document.querySelector('.water-supply__answer-NP-c-hr'),
        answerNPHHr = document.querySelector('.water-supply__answer-NP-h-hr'),
        answerAlphaTotHr = document.querySelector('.water-supply__answer-alpha-tot-hr'),
        answerAlphaCHr = document.querySelector('.water-supply__answer-alpha-c-hr'),
        answerAlphaHHr = document.querySelector('.water-supply__answer-alpha-h-hr'),
        answerQTotHr = document.querySelector('.water-supply__answer-q-tot-hr'),
        answerQCHr = document.querySelector('.water-supply__answer-q-c-hr'),
        answerQHHr = document.querySelector('.water-supply__answer-q-h-hr'),
        answerFinal = document.querySelector('.water-supply__answer-final');

    let Ntot = 4 * numApartments,
        Nh = 3 * numApartments;

    answerOne.textContent = Ntot;
    answerTwo.textContent = Nh;

    let U = occupancy * numApartments;

    answerMain.textContent = U;

    let Ptot = ((15.6 * U) / (3600 * 0.3 * Ntot)).toFixed(4),
        Pc = ((5.6 * U) / (3600 * 0.2 * Ntot)).toFixed(4),
        Ph = ((10 * U) / (3600 * 0.2 * Nh)).toFixed(4);

    answerSecTot.textContent = '= ' + Ptot;
    answerSecC.textContent = '= ' + Pc;
    answerSecH.textContent = '= ' + Ph;

    let NPTot = (Ntot * Ptot).toFixed(3),
        NPTotNum = Number(NPTot),
        NPC = (Ntot * Pc).toFixed(3),
        NPCNum = Number(NPC),
        NPH = (Nh * Ph).toFixed(3),
        NPHNum = Number(NPH),
        alphaSecTot = defineAlpha(NPTotNum),
        alphaSecC = defineAlpha(NPCNum),
        alphaSecH = defineAlpha(NPHNum);

    answerNPTot.textContent = NPTot;
    answerNPC.textContent = NPC;
    answerNPH.textContent = NPH;
    answerAlphaTot.textContent = alphaSecTot;
    answerAlphaC.textContent = alphaSecC;
    answerAlphaH.textContent = alphaSecH;

    answerQTot.textContent = (5 * 0.3 * alphaSecTot).toFixed(3);
    answerQC.textContent = (5 * 0.2 * alphaSecC).toFixed(3);
    answerQH.textContent = (5 * 0.2 * alphaSecH).toFixed(3);

    let PtotHr = ((3600 * Ptot * 0.3) / 300).toFixed(4),
        PcHr = ((3600 * Pc * 0.2) / 200).toFixed(4),
        PhHr = ((3600 * Ph * 0.2) / 200).toFixed(4);

    answerHrTot.textContent = '= ' + PtotHr;
    answerHrC.textContent = '= ' + PcHr;
    answerHrH.textContent = '= ' + PhHr;

    let NPTotHr = Ntot * PtotHr,
        NPCHr = Ntot * PcHr,
        NPHHr = Nh * PhHr,
        alphaTotHr = defineAlpha(NPTotHr),
        alphaCHr = defineAlpha(NPCHr),
        alphaHHr = defineAlpha(NPHHr);

    answerNPTotHr.textContent = NPTotHr.toFixed(3);
    answerNPCHr.textContent = NPCHr.toFixed(3);
    answerNPHHr.textContent = NPHHr.toFixed(3);
    answerAlphaTotHr.textContent = alphaTotHr;
    answerAlphaCHr.textContent = alphaCHr;
    answerAlphaHHr.textContent = alphaHHr;

    let qTotHr = (5 * 300 * alphaTotHr).toFixed(0),
        qCHr = (5 * 200 * alphaCHr).toFixed(0),
        qHHr = (5 * 200 * alphaHHr).toFixed(0);

    answerQTotHr.textContent = qTotHr;
    answerQCHr.textContent = qCHr;
    answerQHHr.textContent = qHHr;

    answerFinal.textContent = (5 * 0.3 * alphaSecTot + 1.6).toFixed(3);
}