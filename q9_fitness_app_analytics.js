// Q9: Fitness App Analytics (filter, reduce, map, error if empty)

const data = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(records) {
    if (!Array.isArray(records) || records.length === 0) throw new Error('Dataset is empty');
    this.records = records;
  }

  getActiveUsers(minSteps = 7000) {
    return this.records.filter(r => r.steps > minSteps).map(r => r.user);
  }

  getAverageCalories() {
    const total = this.records.reduce((acc, r) => acc + r.calories, 0);
    return total / this.records.length;
  }

  getUserSummary() {
    return this.records.map(r => `${r.user}: ${r.steps} steps, ${r.calories} cal`);
  }
}

// Execute
try {
  const analytics = new FitnessAnalytics(data);
  console.log('Active users:', analytics.getActiveUsers());
  console.log('Average calories:', analytics.getAverageCalories());
  console.log('User summaries:', analytics.getUserSummary());
} catch (err) {
  console.error('Analytics error:', err.message);
}
