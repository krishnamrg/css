const getTodos = async (resource) => {
    const response = await fetch('data/user1.json');
    const res = await response.json();
    return res;
};

console.log(getTodos());