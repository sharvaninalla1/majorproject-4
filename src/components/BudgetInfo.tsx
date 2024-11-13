import React from 'react';
import { DollarSign } from 'lucide-react';

interface BudgetInfoProps {
  formData: any;
  updateFormData: (data: any) => void;
}

function BudgetInfo({ formData, updateFormData }: BudgetInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Budget Information</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Total Budget (USD)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="budget"
              value={formData.budget}
              onChange={(e) => updateFormData({ budget: e.target.value })}
              className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="Enter your total budget"
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Include tuition, living expenses, and other costs
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="scholarship"
              checked={formData.scholarshipNeeded}
              onChange={(e) => updateFormData({ scholarshipNeeded: e.target.checked })}
              className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
            />
            <label htmlFor="scholarship" className="ml-2 block text-sm text-gray-700">
              I am interested in scholarship opportunities
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="workStudy"
              checked={formData.workStudy}
              onChange={(e) => updateFormData({ workStudy: e.target.checked })}
              className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
            />
            <label htmlFor="workStudy" className="ml-2 block text-sm text-gray-700">
              I plan to work part-time during studies
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Important Note:</h3>
          <p className="text-sm text-gray-600">
            Your budget information helps us recommend programs that align with your financial planning. 
            We'll consider scholarship opportunities and part-time work options in our recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BudgetInfo;