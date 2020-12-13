const numberApartments = document.querySelector('.number-apartments'),
    averageOccupancy = document.querySelector('.average-occupancy'),
    sendOne = document.querySelector('.water-supply__send-one'),
    sendTwo = document.querySelector('.water-supply__send-two'),
    conditionalPass = document.querySelector('.conditional-pass'),
    pipeLength = document.querySelector('.pipe-length'),
    estimatedConsumption = document.querySelector('.estimated-consumption');

function defineAlpha(num) {
    let x,
        arr = [[0.015, 0.202],
        [0.016, 0.205],
        [0.017, 0.207],
        [0.018, 0.210],
        [0.019, 0.212],
        [0.020, 0.215],
        [0.021, 0.217],
        [0.022, 0.219],
        [0.023, 0.222],
        [0.024, 0.224],
        [0.025, 0.226],
        [0.026, 0.228],
        [0.027, 0.230],
        [0.028, 0.233],
        [0.029, 0.235],
        [0.030, 0.237],
        [0.031, 0.239],
        [0.032, 0.241],
        [0.033, 0.243],
        [0.034, 0.245],
        [0.035, 0.247],
        [0.036, 0.249],
        [0.037, 0.250],
        [0.038, 0.252],
        [0.039, 0.254],
        [0.040, 0.256],
        [0.041, 0.258],
        [0.042, 0.259],
        [0.043, 0.261],
        [0.044, 0.263],
        [0.045, 0.265],
        [0.046, 0.266],
        [0.047, 0.268],
        [0.048, 0.270],
        [0.049, 0.271],
        [0.050, 0.273],
        [0.052, 0.276],
        [0.054, 0.280],
        [0.056, 0.283],
        [0.058, 0.286],
        [0.060, 0.289],
        [0.062, 0, 292],
        [0.064, 0.295],
        [0.065, 0.298],
        [0.068, 0.301],
        [0.070, 0.304],
        [0.072, 0.307],
        [0.074, 0.309],
        [0.076, 0.312],
        [0.078, 0.315],
        [0.080, 0.318],
        [0.082, 0.320],
        [0.084, 0.323],
        [0.086, 0.326],
        [0.088, 0.328],
        [0.090, 0.331],
        [0.092, 0.333],
        [0.094, 0.336],
        [0.096, 0.338],
        [0.098, 0.341],
        [0.100, 0.343],
        [0.105, 0.349],
        [4.0, 2.210],
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

    let result = arr[x - 1][1] + ((arr[x][1] - arr[x - 1][1]) / (arr[x][0] - arr[x - 1][0])) * (num - arr[x - 1][0]);
    return result;
}

function findHydraulicResistance(num) {
    let arr = [[15, 14.5], [20, 5.18], [25, 2.64], [32, 1.3], [40, 0.5], [50, 0.143], [65, 0.0081], [80, 0.00264], [100, 0.000766], [150, 0.00013], [200, 0.000035], [250, 0.000018]];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result = arr[i][1] * Math.pow(num, 2);
        if (result < 5) {
            return {
                result: result,
                index: arr[i][0]
            };
        }
    }
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
        answerFinal = document.querySelector('.water-supply__answer-final'),

        taskTwoOne = document.querySelector('.water-supply__answer-task-two-one'),
        taskTwoTwo = document.querySelector('.water-supply__answer-task-two-two'),
        indexOne = document.querySelector('.water-supply__index-one'),
        taskTwoThree = document.querySelector('.water-supply__answer-task-two-three'),
        taskTwoFour = document.querySelector('.water-supply__answer-task-two-four'),
        taskTwoSeven = document.querySelector('.water-supply__answer-task-two-seven'),
        taskTwoEight = document.querySelector('.water-supply__answer-task-two-eight');

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
        alphaSecTot = defineAlpha(NPTotNum).toFixed(3),
        alphaSecC = defineAlpha(NPCNum).toFixed(3),
        alphaSecH = defineAlpha(NPHNum).toFixed(3);

    answerNPTot.textContent = NPTot;
    answerNPC.textContent = NPC;
    answerNPH.textContent = NPH;
    answerAlphaTot.textContent = alphaSecTot;
    answerAlphaC.textContent = alphaSecC;
    answerAlphaH.textContent = alphaSecH;

    resultQC = (5 * 0.2 * alphaSecC).toFixed(3);
    resultQH = (5 * 0.2 * alphaSecH).toFixed(3);

    answerQTot.textContent = (5 * 0.3 * alphaSecTot).toFixed(3);
    answerQC.textContent = resultQC;
    answerQH.textContent = resultQH;

    let PtotHr = ((3600 * Ptot * 0.3) / 300).toFixed(4),
        PcHr = ((3600 * Pc * 0.2) / 200).toFixed(4),
        PhHr = ((3600 * Ph * 0.2) / 200).toFixed(4);

    answerHrTot.textContent = '= ' + PtotHr;
    answerHrC.textContent = '= ' + PcHr;
    answerHrH.textContent = '= ' + PhHr;

    let NPTotHr = Ntot * PtotHr,
        NPCHr = Ntot * PcHr,
        NPHHr = Nh * PhHr,
        alphaTotHr = defineAlpha(NPTotHr).toFixed(3),
        alphaCHr = defineAlpha(NPCHr).toFixed(3),
        alphaHHr = defineAlpha(NPHHr).toFixed(3);

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

    //start of decision second task

    taskTwoOne.innerHTML = '= ' + ((180 * U) / (1000 * 24)).toFixed(1) + ' м<sup>3</sup>/ч';
    let pressureLossOne = findHydraulicResistance(resultQC);
    taskTwoTwo.textContent = ' ' + resultQC + ' л/с';
    taskTwoThree.textContent = ' ' + pressureLossOne.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
    indexOne.textContent = 'dy' + pressureLossOne.index;
    document.querySelector('.water-supply__installation-diameter-one').textContent = pressureLossOne.index + ' мм';

    taskTwoFour.innerHTML = '= ' + ((120 * U) / (1000 * 24)).toFixed(1) + ' м<sup>3</sup>/ч';
    let pressureLossTwo = findHydraulicResistance(resultQH);
    document.querySelector('.water-supply__answer-task-two-five').textContent = resultQH + ' л/с';
    document.querySelector('.water-supply__index-two').textContent = 'dy' + pressureLossTwo.index;
    document.querySelector('.water-supply__answer-task-two-nine').textContent = ' ' + pressureLossTwo.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
    document.querySelector('.water-supply__answer-task-two-six').textContent = pressureLossTwo.index + ' мм';

    taskTwoSeven.innerHTML = '= ' + ((180 * 4) / (1000 * 24)).toFixed(2) + ' м<sup>3</sup>/ч';
    let NcPc = (4 * Pc).toFixed(4);
    alphaNcPc = Number(defineAlpha(NcPc).toFixed(4)),
        qcTwo = 5 * 0.2 * alphaNcPc;
    pressureLossThree = findHydraulicResistance(qcTwo);
    document.querySelector('.water-supply__answer-task-two-twelve').innerHTML = NcPc + ';  α<sup>c</sup> = ' + alphaNcPc + ';';
    document.querySelector('.water-supply__answer-task-two-thirteen').textContent = qcTwo + ' л/с;';
    document.querySelector('.water-supply__index-three').textContent = 'dy' + pressureLossThree.index;
    document.querySelector('.water-supply__answer-task-two-ten').textContent = ' ' + pressureLossThree.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
    document.querySelector('.water-supply__answer-task-two-eleven').textContent = pressureLossThree.index + ' мм.';

    console.log(Pc, NcPc, alphaNcPc)
    taskTwoEight.innerHTML = '= ' + ((120 * 3) / (1000 * 24)).toFixed(3) + ' м<sup>3</sup>/ч';
    let NhPh = (3 * Ph).toFixed(4);
    alphaNhPh = Number(defineAlpha(NhPh).toFixed(5)),
        qhTwo = 5 * 0.2 * alphaNhPh;
    pressureLossFour = findHydraulicResistance(qhTwo);
    document.querySelector('.water-supply__answer-task-two-fourteen').innerHTML = NhPh + ';  α<sup>c</sup> = ' + alphaNhPh + ';';
    document.querySelector('.water-supply__answer-task-two-fifteen').textContent = qhTwo + ' л/с;';
    document.querySelector('.water-supply__index-four').textContent = 'dy' + pressureLossFour.index;
    document.querySelector('.water-supply__answer-task-two-sixteen').textContent = ' ' + pressureLossFour.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
    document.querySelector('.water-supply__answer-task-two-seventeen').textContent = pressureLossFour.index + ' мм.';
}

/*let arraySteelElectrowelded = {
    diameterList: [50, 60, 75, 80, 100, 125, 150, 175, 200, 250],
    mainArray: [
        {
            diameter: 50,
            estimatedExpense: [],
            specificLosses: []
        },
        {
            diameter: 60,
            estimatedExpense: [],
            specificLosses: []
        },
        {
            diameter: 75,
            estimatedExpense: [],
            specificLosses: []
        },
        {
            diameter: 80,
            estimatedExpense: [],
            specificLosses: []
        }
    ]
    [[50, 6.0, 132.8], [50, 6.1, 137.3], [50, 6.2, 141.8], [50, 6.3, 146.4], [50, 6.4, 151.1], [50, 6.5, 155.9], [50, 6.6, 160.7], [50, 6.7, 165.6], [50, 6.8, 170.6], [50, 6.9, 175.6], [50, 7.0, 180.8], [50, 7.1, 186.0], [50, 7.2, 191.2], [50, 7.3, 196.6], [50, 7.4, 202.0], [50, 7.5, 207.5], [50, 7.6, 213.1], [50, 7.7, 218.7], [50, 7.8, 224.5],
    [60, 6.0, 82.5], [60, 6.1, 85.3], [60, 6.2, 88.1], [60, 6.3, 91.0], [60, 6.4, 38.2], [60, 6.5, 93.9], [60, 6.6, 96.9], [60, 6.7, 99.9], [60, 6.8, 102.9], [60, 6.9, 106.0], [60, 7.0, 109.1], [60, 7.1, 112.3], [60, 7.2, 115.6], [60, 7.3, 118.8], [60, 7.4, 122.2], [60, 7.5, 125.5], [60, 7.6, 128.9], [60, 7.7, 132.4], [60, 7.8, 135.9],
    [75, 6.0, 33.9], [75, 6.1, 35.0], [75, 6.2, 36.0], [75, 6.3, 37.1], [75, 6.4, 38.2], [75, 6.5, 39.3], [75, 6.6, 40.5], [75, 6.7, 41.7], [75, 6.8, 43.0], [75, 6.9, 44.2], [75, 7.0, 45.5], [75, 7.1, 46.8], [75, 7.2, 48.2], [75, 7.3, 49.5], [75, 7.4, 50.9], [75, 7.5, 52.3], [75, 7.6, 53.7], [75, 7.7, 55.1], [75, 7.8, 56.5]]
};
*/
/*
let arraySteelElectrowelded = {
    diameterList: [50, 60, 75, 80, 100, 125, 150, 175, 200, 250],
    data: [[50, 6.0, 132.8], [50, 6.1, 137.3], [50, 6.2, 141.8], [50, 6.3, 146.4], [50, 6.4, 151.1], [50, 6.5, 155.9], [50, 6.6, 160.7], [50, 6.7, 165.6], [50, 6.8, 170.6], [50, 6.9, 175.6], [50, 7.0, 180.8], [50, 7.1, 186.0], [50, 7.2, 191.2], [50, 7.3, 196.6], [50, 7.4, 202.0], [50, 7.5, 207.5], [50, 7.6, 213.1], [50, 7.7, 218.7], [50, 7.8, 224.5],
    [60, 6.0, 82.5], [60, 6.1, 85.3], [60, 6.2, 88.1], [60, 6.3, 91.0], [60, 6.4, 38.2], [60, 6.5, 93.9], [60, 6.6, 96.9], [60, 6.7, 99.9], [60, 6.8, 102.9], [60, 6.9, 106.0], [60, 7.0, 109.1], [60, 7.1, 112.3], [60, 7.2, 115.6], [60, 7.3, 118.8], [60, 7.4, 122.2], [60, 7.5, 125.5], [60, 7.6, 128.9], [60, 7.7, 132.4], [60, 7.8, 135.9],
    [75, 6.0, 33.9], [75, 6.1, 35.0], [75, 6.2, 36.0], [75, 6.3, 37.1], [75, 6.4, 38.2], [75, 6.5, 39.3], [75, 6.6, 40.5], [75, 6.7, 41.7], [75, 6.8, 43.0], [75, 6.9, 44.2], [75, 7.0, 45.5], [75, 7.1, 46.8], [75, 7.2, 48.2], [75, 7.3, 49.5], [75, 7.4, 50.9], [75, 7.5, 52.3], [75, 7.6, 53.7], [75, 7.7, 55.1], [75, 7.8, 56.5]]
};*/
/*
let arraySteelElectrowelded = [[50, 60, 75, 80, 100, 125, 150, 175, 200, 250], [50, 6.0, 132.8], [50, 6.1, 137.3], [50, 6.2, 141.8], [50, 6.3, 146.4], [50, 6.4, 151.1], [50, 6.5, 155.9], [50, 6.6, 160.7], [50, 6.7, 165.6], [50, 6.8, 170.6], [50, 6.9, 175.6], [50, 7.0, 180.8], [50, 7.1, 186.0], [50, 7.2, 191.2], [50, 7.3, 196.6], [50, 7.4, 202.0], [50, 7.5, 207.5], [50, 7.6, 213.1], [50, 7.7, 218.7], [50, 7.8, 224.5],
[60, 6.0, 82.5], [60, 6.1, 85.3], [60, 6.2, 88.1], [60, 6.3, 91.0], [60, 6.4, 38.2], [60, 6.5, 93.9], [60, 6.6, 96.9], [60, 6.7, 99.9], [60, 6.8, 102.9], [60, 6.9, 106.0], [60, 7.0, 109.1], [60, 7.1, 112.3], [60, 7.2, 115.6], [60, 7.3, 118.8], [60, 7.4, 122.2], [60, 7.5, 125.5], [60, 7.6, 128.9], [60, 7.7, 132.4], [60, 7.8, 135.9],
[75, 6.0, 33.9], [75, 6.1, 35.0], [75, 6.2, 36.0], [75, 6.3, 37.1], [75, 6.4, 38.2], [75, 6.5, 39.3], [75, 6.6, 40.5], [75, 6.7, 41.7], [75, 6.8, 43.0], [75, 6.9, 44.2], [75, 7.0, 45.5], [75, 7.1, 46.8], [75, 7.2, 48.2], [75, 7.3, 49.5], [75, 7.4, 50.9], [75, 7.5, 52.3], [75, 7.6, 53.7], [75, 7.7, 55.1], [75, 7.8, 56.5]];*/

function findSpecificLosses(arr, d, q) {
    let diameter = 0;
    console.log(arr.diameterList)
    for (let i = 0; i < arr.diameterList.length; i++) {
        if (arr.diameterList[i] >= d) {
            diameter = arr.diameterList[i];
            console.log(diameter)
            break;
        }
    }
    for (let i = 1; i < arr.data.length; i++) {
        if (arr.data[i][0] === diameter && arr.data[i][1] === q) {
            console.log(arr.data[2])
            return { thousandI: arr.data[i][2], diameter: diameter }
        }
    }
}

sendTwo.onclick = function () {
    let conditional = Number(conditionalPass.value),
        //pipeLgt = Number(pipeLength.value),
        consumption = Number(estimatedConsumption.value);

    let oneDecision = findSpecificLosses(arraySteelElectrowelded, conditional, consumption);
    console.log(oneDecision)
    document.querySelector('.water-supply__task-three-answer--one').innerHTML = (oneDecision.thousandI * oneDecision.diameter / 1000).toFixed(3) + ' м';

}