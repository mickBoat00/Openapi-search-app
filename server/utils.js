import data from "./data/data-small.js";

function searchText(condition) {

    // const string = `return the ids of ${data} as array who satisfy the condition`

    return `return just ids seperated by , and nothing else of ${JSON.stringify(data)} who satisfy the condition ${condition} in one line`
}


function filterByIds(idString, data) {
    const ids = idString.split(',').map(Number);

    return data.filter(item => ids.includes(item.id));
}


export { searchText , filterByIds}