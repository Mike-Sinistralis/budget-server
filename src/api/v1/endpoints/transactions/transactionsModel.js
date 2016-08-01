import orchestrate from 'orchestrate';
process.env.ORCHESTRATE_API_KEY='053be91e-740d-480b-893e-81d8f4af7aeb';
const db = orchestrate(process.env.ORCHESTRATE_API_KEY);

function createTransaction(transaction) {
  console.log('Creating new transaction...');
  return db.post('transactions', transaction);
}

function updateTransaction(key, transaction) {
  console.log('Updating transaction by key: ${key}...');
  return db.merge('transactions', key, transaction, { upsert: true });
}

function getTransaction(key) {
  console.log('Getting transaction by key: ${key}...');
  return db.get('transactions', key);
}

// Need to add pagination.
function getTransactionsByRange() {
  console.log('Getting all transactions between ${from} and ${to}...');
  return db.list('transactions', { limit: 100 });
}

function deleteTransaction(key) {
  console.log('Deleting transaction by key: ${key}...');
  return db.remove('transactions', key, false);
}

export {
  createTransaction,
  updateTransaction,
  getTransaction,
  getTransactionsByRange,
  deleteTransaction };
