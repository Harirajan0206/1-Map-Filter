const data = [
{id: '1' , title:"car"},
{id: '2' , title:"bus"},
{id: '3' , title:"plane"},
{id: '4' , title:"train"},
{id: '5' , title:"ship"},
];


// To upperCase //

const upperData = data.map(
    (element)=>{
        return element.title.toUpperCase();
    }

);

console.log(upperData);

///////////////////////////////////////////////////////

// call even numbered data //

const filteredData = data.filter(

    (element) => {
        return element.id % 2 == 0;
    }
);

console.log(filteredData);
