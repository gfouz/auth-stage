const url = 'http://localhost:3000/api/admin/user';

export async function deleteUserService(user) {
  
  try {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.log(error);
  }
}
