import axios from "axios";
function storeExpense(expenseData){
axios.post('https://react-native-course-f33ac-default-rtdb.firebaseio.com/expenses.json',
    expenseData
);
}