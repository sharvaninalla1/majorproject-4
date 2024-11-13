import React from 'react';

interface PreferencesInfoProps {
  formData: any;
  updateFormData: (data: any) => void;
}

function PreferencesInfo({ formData, updateFormData }: PreferencesInfoProps) {
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'Netherlands'];
  const courses = ['Data Science', 'Software Engineering', 'Artificial Intelligence', 'Robotics', 'Computer Networks', 'Cybersecurity'];

  const handleCountryChange = (country: string) => {
    const updatedCountries = formData.preferredCountries?.includes(country)
      ? formData.preferredCountries.filter((c: string) => c !== country)
      : [...(formData.preferredCountries || []), country];
    updateFormData({ preferredCountries: updatedCountries });
  };

  const handleCourseChange = (course: string) => {
    const updatedCourses = formData.courseInterests?.includes(course)
      ? formData.courseInterests.filter((c: string) => c !== course)
      : [...(formData.courseInterests || []), course];
    updateFormData({ courseInterests: updatedCourses });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Preferences</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Preferred Countries
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {countries.map((country) => (
              <label
                key={country}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors
                  ${formData.preferredCountries?.includes(country)
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-900'}`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.preferredCountries?.includes(country)}
                  onChange={() => handleCountryChange(country)}
                />
                <span>{country}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Course Interests
          </label>
          <div className="grid grid-cols-2 gap-3">
            {courses.map((course) => (
              <label
                key={course}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors
                  ${formData.courseInterests?.includes(course)
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-900'}`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.courseInterests?.includes(course)}
                  onChange={() => handleCourseChange(course)}
                />
                <span>{course}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
            Intended Start Semester
          </label>
          <select
            id="semester"
            value={formData.intendedSemester}
            onChange={(e) => updateFormData({ intendedSemester: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          >
            <option value="">Select semester</option>
            <option value="fall_2024">Fall 2024</option>
            <option value="spring_2025">Spring 2025</option>
            <option value="fall_2025">Fall 2025</option>
            <option value="spring_2026">Spring 2026</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PreferencesInfo;