import React, { useState } from 'react';
import { GraduationCap, BookOpen, DollarSign, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import AcademicInfo from './components/AcademicInfo';
import PreferencesInfo from './components/PreferencesInfo';
import BudgetInfo from './components/BudgetInfo';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    // Academic Info
    gre: '',
    cgpa: '',
    major: '',
    university: '',
    // Preferences
    preferredCountries: [],
    courseInterests: [],
    intendedSemester: '',
    // Budget
    budget: '',
    scholarshipNeeded: false,
    workStudy: false
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const steps = [
    { id: 1, title: 'Personal Info', icon: GraduationCap },
    { id: 2, title: 'Academic Details', icon: BookOpen },
    { id: 3, title: 'Preferences', icon: Target },
    { id: 4, title: 'Budget', icon: DollarSign }
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <AcademicInfo formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <PreferencesInfo formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <BudgetInfo formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto pt-12 px-4">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-12 h-12 text-blue-900" />
            <h1 className="text-4xl font-bold text-blue-900 ml-2">EduMatch</h1>
          </div>
          <p className="text-gray-600">Find your perfect postgraduate program match</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((s, i) => (
              <div key={s.id} className="flex-1 relative">
                <div className={`flex flex-col items-center ${i !== steps.length - 1 ? 'after:content-[""] after:absolute after:top-5 after:w-full after:h-0.5 after:bg-gray-300 after:z-0' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${step >= s.id ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className={`mt-2 text-sm font-medium ${step >= s.id ? 'text-blue-900' : 'text-gray-500'}`}>
                    {s.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-12">
          <button
            onClick={prevStep}
            className={`flex items-center px-6 py-3 rounded-lg ${step === 1 ? 'invisible' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
          
          {step === steps.length ? (
            <button
              onClick={handleSubmit}
              className="flex items-center px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg"
            >
              Submit Application
            </button>
          ) : (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;