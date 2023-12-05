
function generateMealPlan() {
  
  const mealPlanWindow = window.open('', '_blank');
  mealPlanWindow.document.write('<html><title>Your Meal Plan</title>');

  mealPlanWindow.document.write('<body>');
  mealPlanWindow.document.write('<h1>Your Meal Plan</h1>');
  mealPlanWindow.document.write('</div>');
  mealPlanWindow.document.write('<h2>Meal Plan</h2>');

  const mealInputs = document.getElementsByClassName('MealPlan');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  for (let i = 0; i < days.length; i++) {
    const Day = days[i];
    const Breakfast = mealInputs[i * 5].value
    const earlySnack = mealInputs[i * 5 + 1].value
    const Lunch = mealInputs[i * 5 + 2].value
    const lateSnack = mealInputs[i * 5 + 3].value
    const Dinner = mealInputs[i * 5 + 4].value

    mealPlanWindow.document.write('<table>');
    mealPlanWindow.document.write('<tr><th>Day</th><th>Breakfast</th><th>earlySnack</th><th>Lunch</th><th>lateSnack</th><th>Dinner</th></tr>')
    mealPlanWindow.document.write(`<tr><td>${Day}</td><td>${Breakfast}</td><td>${earlySnack}</td><td>${Lunch}</td><td>${lateSnack}</td><td>${Dinner}</td></tr>`);
  }

  mealPlanWindow.document.write('</table>');
  mealPlanWindow.document.write('</body></html>');
  mealPlanWindow.document.close();
}

