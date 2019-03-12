const buscarProductos = (searchText, callback) => {

    let busqueda = searchText.replace(/\s/g, '+'), resultado

    fetch(`https://www.liverpool.com.mx/tienda/?s=${busqueda}&d3106047a194921c01969dfdec083925=json`)
        .then(response => response.json())
        .then(data => {
            resultado = data.contents[0].mainContent[(data.contents[0].mainContent).length - 1].contents[0].records
        })
        .then(() => callback(resultado))
        .catch(err => console.log(err.message));

};

export { buscarProductos };