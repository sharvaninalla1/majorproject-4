import React from 'react';

interface AcademicInfoProps {
  formData: any;
  updateFormData: (data: any) => void;
}

function AcademicInfo({ formData, updateFormData }: AcademicInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Academic Information</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="gre" className="block text-sm font-medium text-gray-700 mb-1">
              GRE Score
            </label>
            <input
              type="number"
              id="gre"
              value={formData.gre}
              onChange={(e) => updateFormData({ gre: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="Enter GRE score"
            />
          </div>

          <div>
            <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700 mb-1">
              CGPA
            </label>
            <input
              type="number"
              step="0.01"
              id="cgpa"
              value={formData.cgpa}
              onChange={(e) => updateFormData({ cgpa: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              placeholder="Enter CGPA (out of 4.0)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
            Major/Specialization
          </label>
          <select
            id="major"
            value={formData.major}
            onChange={(e) => updateFormData({ major: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select your major</option>
            <option value="computer_science">Computer Science</option>
            <option value="electrical">Electrical Engineering</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="civil">Civil Engineering</option>
            <option value="chemical">Chemical Engineering</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
            Current/Previous University
          </label>
          <input
            type="text"
            id="university"
            value={formData.university}
            onChange={(e) => updateFormData({ university: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            placeholder="Enter university name"
          />
        </div>
      </div>
    </div>
  );
}

export default AcademicInfo;