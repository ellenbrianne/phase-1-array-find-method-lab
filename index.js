function superbowlWin (record) {
    let result = undefined;
    for (let item of record) {
        if (item.result === 'W') {
            result = item.year;
            break;
        }; 

    };

    return result;
}; 

let winningYear = record.find(superbowlWin);