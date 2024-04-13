const BookItem = () => {
    return (
        <>
            <h2>100 años de soledad</h2>
            <h3>Gabriel Garcia Marquez</h3>
            <div>{Array(5).fill("*").length} estrellas</div>
            <p>410 páginas</p>
        </>
    );
};
export default BookItem;