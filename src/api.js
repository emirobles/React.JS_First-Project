export const getProducts = () => new Promise ((resolve, reject) => {
    setTimeout(() => resolve([
        {
            id: 1,
            title: 'Remeras KNY',
            description: 'Modelo Nezuko',
            price: 1800,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_810544-MLA47783492736_102021-W.jpg',
            stock: 10,
        },
        {
            id: 2,
            title: 'Figuras KNY',
            description: 'Tanjiro, Nezuko, Inosuke, Zenitsu y Tomioka',
            price: 4800,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_700262-MLA40541492368_012020-O.jpg',
            stock: 5,
        },
        {
            id: 3,
            title: 'Aros KNY',
            description: 'Aros de Tanjiro',
            price: 500,
            pictureUrl: 'https://i.linio.com/p/9b07b48f13ace0b5e92dc9e48fbfb11c-product.jpg',
            stock: 7,
        }
    ]), 2000)
});

export const getItem = () => new Promise ((resolve, reject) => {
    setTimeout(() => resolve(
        {
            id: 1,
            title: 'Remeras KNY',
            description: 'Modelo Nezuko',
            price: 1800,
            pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_810544-MLA47783492736_102021-W.jpg',
            stock: 10,
        },
    ), 2000)
});