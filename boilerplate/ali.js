function convertQueryFieldsToArray(fields) {
    const result = []
    fields = (fields.trim()).split(',');
    fields.forEach((field) => {
        if (field.trim().length != 0) result.push(field.trim())
    })
    return result;
}
const fields='          ,  ali   ,    maryam            '
console.log(convertQueryFieldsToArray(fields))