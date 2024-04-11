document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    // console.log(rows);
    for (const [i, row] of rows.entries()) {
        const [first, secound] = row.toLowerCase().trim().split('_');
        const output = `${first} ${secound.replace(
            secound[0], secound[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }

})