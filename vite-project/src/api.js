export const fetchAllProducts = async () => {
    try { const res = await fetch('https://fakestoreapi.com/products');
    return await res.json(); } catch (error) {
    console.error('Error fetching products:', error); } };
   
   export const fetchProductById = async (id) => {
     try { const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json(); } catch (error) {
    console.error('Error fetching product by ID:', error); } };
   