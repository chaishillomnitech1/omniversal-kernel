/**
 * Omniversal Kernel - Complete Usage Examples
 * Demonstrates all features and integrations
 */

const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Example 1: White-Label AI/ML Predictions
async function example1_WhiteLabelAI() {
  console.log('\n🤖 Example 1: White-Label AI/ML Predictions\n');
  
  const response = await axios.post(`${BASE_URL}/api/ai/white-label`, {
    prompt: 'Predict property value and spiritual growth',
    context: { location: 'Dubai Marina', size: 2500 },
    architectId: 'ARCH-12345'
  });
  
  console.log('✅ AI Prediction Result:', response.data);
  return response.data;
}

// Example 2: CRM Sync
async function example2_CRMSync() {
  console.log('\n👥 Example 2: Salesforce CRM Synchronization\n');
  
  const response = await axios.post(`${BASE_URL}/api/crm/sync`, {
    platform: 'salesforce',
    architects: [
      { id: 'ARCH-001', name: 'John Smith', spiritualLevel: 7, engagement: 92 }
    ],
    syncType: 'full'
  });
  
  console.log('✅ CRM Sync Complete:', response.data);
  return response.data;
}

// Run all examples
async function runAllExamples() {
  console.log('🌌 OMNIVERSAL KERNEL - EXAMPLES 🌌\n');
  
  try {
    await example1_WhiteLabelAI();
    await example2_CRMSync();
    
    console.log('\n✅ ALL EXAMPLES COMPLETE\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

module.exports = { runAllExamples };

if (require.main === module) {
  runAllExamples();
}
