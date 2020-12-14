const numberApartments = document.querySelector('.number-apartments'),
    averageOccupancy = document.querySelector('.average-occupancy'),
    sendOne = document.querySelector('.water-supply__send-one'),
    sendTwo = document.querySelector('.water-supply__send-two'),
    conditionalPass = document.querySelector('.conditional-pass'),
    pipeLength = document.querySelector('.pipe-length'),
    estimatedConsumption = document.querySelector('.estimated-consumption');

function defineAlpha(num, obj) {
    let x;
    for (let i = 0; i < obj.alphaValueFromNP.length; i++) {
        if (num < obj.alphaValueFromNP[i][0]) {
            x = i;
            break;
        }
    }
    let result = obj.alphaValueFromNP[x - 1][1] + ((obj.alphaValueFromNP[x][1] - obj.alphaValueFromNP[x - 1][1]) / (obj.alphaValueFromNP[x][0] - obj.alphaValueFromNP[x - 1][0])) * (num - obj.alphaValueFromNP[x - 1][0]);
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

    let requestURL = 'https://boosb.github.io/Subscriber-devices-of-heating-networks/json/alphaValueFromNP.json';
    let request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    document.querySelector('.water-supply__main-given').innerHTML = 'с числом квартир n<sub>кв</sub> = ' + numApartments + ' и средней заселённостью V<sub>o</sub> = ' + occupancy + ' чел/кв';

    request.onload = function () {
        let objJSON = request.response;

        let Ntot = 4 * numApartments,
            Nh = 3 * numApartments;

        answerOne.textContent = Ntot;
        answerTwo.textContent = Nh;

        let U = (occupancy * numApartments).toFixed(1);

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
            alphaSecTot = defineAlpha(NPTotNum, objJSON).toFixed(3),
            alphaSecC = defineAlpha(NPCNum, objJSON).toFixed(3),
            alphaSecH = defineAlpha(NPHNum, objJSON).toFixed(3);

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
            alphaTotHr = defineAlpha(NPTotHr, objJSON).toFixed(3),
            alphaCHr = defineAlpha(NPCHr, objJSON).toFixed(3),
            alphaHHr = defineAlpha(NPHHr, objJSON).toFixed(3);

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
        alphaNcPc = Number(defineAlpha(NcPc, objJSON).toFixed(4)),
            qcTwo = 5 * 0.2 * alphaNcPc;
        pressureLossThree = findHydraulicResistance(qcTwo);
        document.querySelector('.water-supply__answer-task-two-twelve').innerHTML = NcPc + ';  α<sup>c</sup> = ' + alphaNcPc + ';';
        document.querySelector('.water-supply__answer-task-two-thirteen').textContent = qcTwo + ' л/с;';
        document.querySelector('.water-supply__index-three').textContent = 'dy' + pressureLossThree.index;
        document.querySelector('.water-supply__answer-task-two-ten').textContent = ' ' + pressureLossThree.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
        document.querySelector('.water-supply__answer-task-two-eleven').textContent = pressureLossThree.index + ' мм.';

        taskTwoEight.innerHTML = '= ' + ((120 * 3) / (1000 * 24)).toFixed(3) + ' м<sup>3</sup>/ч';
        let NhPh = (3 * Ph).toFixed(4);
        alphaNhPh = Number(defineAlpha(NhPh, objJSON).toFixed(5)),
            qhTwo = 5 * 0.2 * alphaNhPh;
        pressureLossFour = findHydraulicResistance(qhTwo);
        document.querySelector('.water-supply__answer-task-two-fourteen').innerHTML = NhPh + ';  α<sup>c</sup> = ' + alphaNhPh + ';';
        document.querySelector('.water-supply__answer-task-two-fifteen').textContent = qhTwo + ' л/с;';
        document.querySelector('.water-supply__index-four').textContent = 'dy' + pressureLossFour.index;
        document.querySelector('.water-supply__answer-task-two-sixteen').textContent = ' ' + pressureLossFour.result.toFixed(2) + ' м, что меньше допустимых 5 м.';
        document.querySelector('.water-supply__answer-task-two-seventeen').textContent = pressureLossFour.index + ' мм.';
    }
}

//task three

function findSpecificLosses(arr, d, q) {
    let diameter = 0;
    for (let i = 0; i < arr.mainArray.length; i++) {
        let arrItem = arr.mainArray[i];
        if (arrItem.diameter >= d) {
            diameter = arrItem.diameter;
            for (let j = 0; j < arrItem.estimatedExpense.length; j++) {
                if (arrItem.estimatedExpense[j] === q) {
                    return { thousandI: arrItem.specificLosses[j], diameter: diameter }
                }
            }
        }
    }
}

sendTwo.onclick = function () {
    let requestURL = 'https://boosb.github.io/Subscriber-devices-of-heating-networks/json/taskOneTwoThree.json';
    let request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let objJSON = request.response;

        let conditional = Number(conditionalPass.value),
            //pipeLgt = Number(pipeLength.value),
            consumption = Number(estimatedConsumption.value);

        let oneDecision = findSpecificLosses(objJSON.steelWaterAndGasPipes, conditional, consumption);
        let twoDecision = findSpecificLosses(objJSON.steelElectrowelded, conditional, consumption);
        let threeDecision = findSpecificLosses(objJSON.castIron, conditional, consumption);
        let fourDecision = findSpecificLosses(objJSON.asbestosCement, conditional, consumption);
        let fiveDecision = findSpecificLosses(objJSON.polyethylene, conditional, consumption);

        document.querySelector('.task-three-item-text--one').innerHTML = 'Для стальных водогазопроводных при d = ' + oneDecision.diameter + ' находим искомые значения удельных потерь напора 1000i.<br> 1000i = ' + oneDecision.thousandI + ' мм вод. ст./м.';
        document.querySelector('.water-supply__task-three-answer--one').innerHTML = (oneDecision.thousandI * oneDecision.diameter / 1000).toFixed(3) + ' м';

        document.querySelector('.task-three-item-text--two').innerHTML = 'Для стальных электросварных при d = ' + twoDecision.diameter + ' находим искомые значения удельных потерь напора 1000i.<br> 1000i = ' + twoDecision.thousandI + ' мм вод. ст./м.';
        document.querySelector('.water-supply__task-three-answer--two').innerHTML = (twoDecision.thousandI * twoDecision.diameter / 1000).toFixed(3) + ' м';

        document.querySelector('.task-three-item-text--three').innerHTML = 'Для чугунных при d = ' + threeDecision.diameter + ' находим искомые значения удельных потерь напора 1000i.<br> 1000i = ' + threeDecision.thousandI + ' мм вод. ст./м.';
        document.querySelector('.water-supply__task-three-answer--three').innerHTML = (threeDecision.thousandI * threeDecision.diameter / 1000).toFixed(3) + ' м';

        document.querySelector('.task-three-item-text--four').innerHTML = 'Для асбестоцементных при d = ' + fourDecision.diameter + ' находим искомые значения удельных потерь напора 1000i.<br> 1000i = ' + fourDecision.thousandI + ' мм вод. ст./м.';
        document.querySelector('.water-supply__task-three-answer--four').innerHTML = (fourDecision.thousandI * fourDecision.diameter / 1000).toFixed(3) + ' м';

        document.querySelector('.task-three-item-text--five').innerHTML = 'Для полиэтиленовых при d = ' + fiveDecision.diameter + ' находим искомые значения удельных потерь напора 1000i.<br> 1000i = ' + fiveDecision.thousandI + ' мм вод. ст./м.';
        document.querySelector('.water-supply__task-three-answer--five').innerHTML = (fiveDecision.thousandI * fiveDecision.diameter / 1000).toFixed(3) + ' м';
    }
}