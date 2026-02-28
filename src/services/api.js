const BASE_URL = 'https://dummyjson.com/users';

export const fetchUsers = async (params = {}) => {
  const queryParams = new URLSearchParams();
  
  if (params.limit) queryParams.append('limit', params.limit);
  if (params.skip) queryParams.append('skip', params.skip);
  if (params.sortBy) queryParams.append('sortBy', params.sortBy);
  if (params.order) queryParams.append('order', params.order);
  
  const url = `${BASE_URL}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};

export const fetchUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};