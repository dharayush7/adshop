export const procductData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    await console.log(response);
    return await response.json();
}