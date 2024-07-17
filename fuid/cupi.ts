interface JWT {
  // Define JWT interface properties here
}

// Example usage
const data = {
  token: { /* JWT object */ },
  account: { /* account details */ },
  user: { /* user details */ }
};

// Call the async function
try {
  await jwt(data); // Assuming `jwt` is a function defined elsewhere
  console.log('Async function completed successfully');
} catch (error) {
  console.error('Error in async function:', error);
}
